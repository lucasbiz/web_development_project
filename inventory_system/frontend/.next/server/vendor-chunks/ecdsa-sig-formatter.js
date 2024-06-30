"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/ecdsa-sig-formatter";
exports.ids = ["vendor-chunks/ecdsa-sig-formatter"];
exports.modules = {

/***/ "(ssr)/./node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar Buffer = (__webpack_require__(/*! safe-buffer */ \"(ssr)/./node_modules/safe-buffer/index.js\").Buffer);\n\nvar getParamBytesForAlg = __webpack_require__(/*! ./param-bytes-for-alg */ \"(ssr)/./node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js\");\n\nvar MAX_OCTET = 0x80,\n\tCLASS_UNIVERSAL = 0,\n\tPRIMITIVE_BIT = 0x20,\n\tTAG_SEQ = 0x10,\n\tTAG_INT = 0x02,\n\tENCODED_TAG_SEQ = (TAG_SEQ | PRIMITIVE_BIT) | (CLASS_UNIVERSAL << 6),\n\tENCODED_TAG_INT = TAG_INT | (CLASS_UNIVERSAL << 6);\n\nfunction base64Url(base64) {\n\treturn base64\n\t\t.replace(/=/g, '')\n\t\t.replace(/\\+/g, '-')\n\t\t.replace(/\\//g, '_');\n}\n\nfunction signatureAsBuffer(signature) {\n\tif (Buffer.isBuffer(signature)) {\n\t\treturn signature;\n\t} else if ('string' === typeof signature) {\n\t\treturn Buffer.from(signature, 'base64');\n\t}\n\n\tthrow new TypeError('ECDSA signature must be a Base64 string or a Buffer');\n}\n\nfunction derToJose(signature, alg) {\n\tsignature = signatureAsBuffer(signature);\n\tvar paramBytes = getParamBytesForAlg(alg);\n\n\t// the DER encoded param should at most be the param size, plus a padding\n\t// zero, since due to being a signed integer\n\tvar maxEncodedParamLength = paramBytes + 1;\n\n\tvar inputLength = signature.length;\n\n\tvar offset = 0;\n\tif (signature[offset++] !== ENCODED_TAG_SEQ) {\n\t\tthrow new Error('Could not find expected \"seq\"');\n\t}\n\n\tvar seqLength = signature[offset++];\n\tif (seqLength === (MAX_OCTET | 1)) {\n\t\tseqLength = signature[offset++];\n\t}\n\n\tif (inputLength - offset < seqLength) {\n\t\tthrow new Error('\"seq\" specified length of \"' + seqLength + '\", only \"' + (inputLength - offset) + '\" remaining');\n\t}\n\n\tif (signature[offset++] !== ENCODED_TAG_INT) {\n\t\tthrow new Error('Could not find expected \"int\" for \"r\"');\n\t}\n\n\tvar rLength = signature[offset++];\n\n\tif (inputLength - offset - 2 < rLength) {\n\t\tthrow new Error('\"r\" specified length of \"' + rLength + '\", only \"' + (inputLength - offset - 2) + '\" available');\n\t}\n\n\tif (maxEncodedParamLength < rLength) {\n\t\tthrow new Error('\"r\" specified length of \"' + rLength + '\", max of \"' + maxEncodedParamLength + '\" is acceptable');\n\t}\n\n\tvar rOffset = offset;\n\toffset += rLength;\n\n\tif (signature[offset++] !== ENCODED_TAG_INT) {\n\t\tthrow new Error('Could not find expected \"int\" for \"s\"');\n\t}\n\n\tvar sLength = signature[offset++];\n\n\tif (inputLength - offset !== sLength) {\n\t\tthrow new Error('\"s\" specified length of \"' + sLength + '\", expected \"' + (inputLength - offset) + '\"');\n\t}\n\n\tif (maxEncodedParamLength < sLength) {\n\t\tthrow new Error('\"s\" specified length of \"' + sLength + '\", max of \"' + maxEncodedParamLength + '\" is acceptable');\n\t}\n\n\tvar sOffset = offset;\n\toffset += sLength;\n\n\tif (offset !== inputLength) {\n\t\tthrow new Error('Expected to consume entire buffer, but \"' + (inputLength - offset) + '\" bytes remain');\n\t}\n\n\tvar rPadding = paramBytes - rLength,\n\t\tsPadding = paramBytes - sLength;\n\n\tvar dst = Buffer.allocUnsafe(rPadding + rLength + sPadding + sLength);\n\n\tfor (offset = 0; offset < rPadding; ++offset) {\n\t\tdst[offset] = 0;\n\t}\n\tsignature.copy(dst, offset, rOffset + Math.max(-rPadding, 0), rOffset + rLength);\n\n\toffset = paramBytes;\n\n\tfor (var o = offset; offset < o + sPadding; ++offset) {\n\t\tdst[offset] = 0;\n\t}\n\tsignature.copy(dst, offset, sOffset + Math.max(-sPadding, 0), sOffset + sLength);\n\n\tdst = dst.toString('base64');\n\tdst = base64Url(dst);\n\n\treturn dst;\n}\n\nfunction countPadding(buf, start, stop) {\n\tvar padding = 0;\n\twhile (start + padding < stop && buf[start + padding] === 0) {\n\t\t++padding;\n\t}\n\n\tvar needsSign = buf[start + padding] >= MAX_OCTET;\n\tif (needsSign) {\n\t\t--padding;\n\t}\n\n\treturn padding;\n}\n\nfunction joseToDer(signature, alg) {\n\tsignature = signatureAsBuffer(signature);\n\tvar paramBytes = getParamBytesForAlg(alg);\n\n\tvar signatureBytes = signature.length;\n\tif (signatureBytes !== paramBytes * 2) {\n\t\tthrow new TypeError('\"' + alg + '\" signatures must be \"' + paramBytes * 2 + '\" bytes, saw \"' + signatureBytes + '\"');\n\t}\n\n\tvar rPadding = countPadding(signature, 0, paramBytes);\n\tvar sPadding = countPadding(signature, paramBytes, signature.length);\n\tvar rLength = paramBytes - rPadding;\n\tvar sLength = paramBytes - sPadding;\n\n\tvar rsBytes = 1 + 1 + rLength + 1 + 1 + sLength;\n\n\tvar shortLength = rsBytes < MAX_OCTET;\n\n\tvar dst = Buffer.allocUnsafe((shortLength ? 2 : 3) + rsBytes);\n\n\tvar offset = 0;\n\tdst[offset++] = ENCODED_TAG_SEQ;\n\tif (shortLength) {\n\t\t// Bit 8 has value \"0\"\n\t\t// bits 7-1 give the length.\n\t\tdst[offset++] = rsBytes;\n\t} else {\n\t\t// Bit 8 of first octet has value \"1\"\n\t\t// bits 7-1 give the number of additional length octets.\n\t\tdst[offset++] = MAX_OCTET\t| 1;\n\t\t// length, base 256\n\t\tdst[offset++] = rsBytes & 0xff;\n\t}\n\tdst[offset++] = ENCODED_TAG_INT;\n\tdst[offset++] = rLength;\n\tif (rPadding < 0) {\n\t\tdst[offset++] = 0;\n\t\toffset += signature.copy(dst, offset, 0, paramBytes);\n\t} else {\n\t\toffset += signature.copy(dst, offset, rPadding, paramBytes);\n\t}\n\tdst[offset++] = ENCODED_TAG_INT;\n\tdst[offset++] = sLength;\n\tif (sPadding < 0) {\n\t\tdst[offset++] = 0;\n\t\tsignature.copy(dst, offset, paramBytes);\n\t} else {\n\t\tsignature.copy(dst, offset, paramBytes + sPadding);\n\t}\n\n\treturn dst;\n}\n\nmodule.exports = {\n\tderToJose: derToJose,\n\tjoseToDer: joseToDer\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZWNkc2Etc2lnLWZvcm1hdHRlci9zcmMvZWNkc2Etc2lnLWZvcm1hdHRlci5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixhQUFhLDRGQUE2Qjs7QUFFMUMsMEJBQTBCLG1CQUFPLENBQUMsa0dBQXVCOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsa0JBQWtCLG1CQUFtQjtBQUNyQztBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsc0JBQXNCLHVCQUF1QjtBQUM3QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW52ZW50b3J5X3N5c3RlbS8uL25vZGVfbW9kdWxlcy9lY2RzYS1zaWctZm9ybWF0dGVyL3NyYy9lY2RzYS1zaWctZm9ybWF0dGVyLmpzPzk0NzgiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG52YXIgQnVmZmVyID0gcmVxdWlyZSgnc2FmZS1idWZmZXInKS5CdWZmZXI7XG5cbnZhciBnZXRQYXJhbUJ5dGVzRm9yQWxnID0gcmVxdWlyZSgnLi9wYXJhbS1ieXRlcy1mb3ItYWxnJyk7XG5cbnZhciBNQVhfT0NURVQgPSAweDgwLFxuXHRDTEFTU19VTklWRVJTQUwgPSAwLFxuXHRQUklNSVRJVkVfQklUID0gMHgyMCxcblx0VEFHX1NFUSA9IDB4MTAsXG5cdFRBR19JTlQgPSAweDAyLFxuXHRFTkNPREVEX1RBR19TRVEgPSAoVEFHX1NFUSB8IFBSSU1JVElWRV9CSVQpIHwgKENMQVNTX1VOSVZFUlNBTCA8PCA2KSxcblx0RU5DT0RFRF9UQUdfSU5UID0gVEFHX0lOVCB8IChDTEFTU19VTklWRVJTQUwgPDwgNik7XG5cbmZ1bmN0aW9uIGJhc2U2NFVybChiYXNlNjQpIHtcblx0cmV0dXJuIGJhc2U2NFxuXHRcdC5yZXBsYWNlKC89L2csICcnKVxuXHRcdC5yZXBsYWNlKC9cXCsvZywgJy0nKVxuXHRcdC5yZXBsYWNlKC9cXC8vZywgJ18nKTtcbn1cblxuZnVuY3Rpb24gc2lnbmF0dXJlQXNCdWZmZXIoc2lnbmF0dXJlKSB7XG5cdGlmIChCdWZmZXIuaXNCdWZmZXIoc2lnbmF0dXJlKSkge1xuXHRcdHJldHVybiBzaWduYXR1cmU7XG5cdH0gZWxzZSBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiBzaWduYXR1cmUpIHtcblx0XHRyZXR1cm4gQnVmZmVyLmZyb20oc2lnbmF0dXJlLCAnYmFzZTY0Jyk7XG5cdH1cblxuXHR0aHJvdyBuZXcgVHlwZUVycm9yKCdFQ0RTQSBzaWduYXR1cmUgbXVzdCBiZSBhIEJhc2U2NCBzdHJpbmcgb3IgYSBCdWZmZXInKTtcbn1cblxuZnVuY3Rpb24gZGVyVG9Kb3NlKHNpZ25hdHVyZSwgYWxnKSB7XG5cdHNpZ25hdHVyZSA9IHNpZ25hdHVyZUFzQnVmZmVyKHNpZ25hdHVyZSk7XG5cdHZhciBwYXJhbUJ5dGVzID0gZ2V0UGFyYW1CeXRlc0ZvckFsZyhhbGcpO1xuXG5cdC8vIHRoZSBERVIgZW5jb2RlZCBwYXJhbSBzaG91bGQgYXQgbW9zdCBiZSB0aGUgcGFyYW0gc2l6ZSwgcGx1cyBhIHBhZGRpbmdcblx0Ly8gemVybywgc2luY2UgZHVlIHRvIGJlaW5nIGEgc2lnbmVkIGludGVnZXJcblx0dmFyIG1heEVuY29kZWRQYXJhbUxlbmd0aCA9IHBhcmFtQnl0ZXMgKyAxO1xuXG5cdHZhciBpbnB1dExlbmd0aCA9IHNpZ25hdHVyZS5sZW5ndGg7XG5cblx0dmFyIG9mZnNldCA9IDA7XG5cdGlmIChzaWduYXR1cmVbb2Zmc2V0KytdICE9PSBFTkNPREVEX1RBR19TRVEpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ0NvdWxkIG5vdCBmaW5kIGV4cGVjdGVkIFwic2VxXCInKTtcblx0fVxuXG5cdHZhciBzZXFMZW5ndGggPSBzaWduYXR1cmVbb2Zmc2V0KytdO1xuXHRpZiAoc2VxTGVuZ3RoID09PSAoTUFYX09DVEVUIHwgMSkpIHtcblx0XHRzZXFMZW5ndGggPSBzaWduYXR1cmVbb2Zmc2V0KytdO1xuXHR9XG5cblx0aWYgKGlucHV0TGVuZ3RoIC0gb2Zmc2V0IDwgc2VxTGVuZ3RoKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdcInNlcVwiIHNwZWNpZmllZCBsZW5ndGggb2YgXCInICsgc2VxTGVuZ3RoICsgJ1wiLCBvbmx5IFwiJyArIChpbnB1dExlbmd0aCAtIG9mZnNldCkgKyAnXCIgcmVtYWluaW5nJyk7XG5cdH1cblxuXHRpZiAoc2lnbmF0dXJlW29mZnNldCsrXSAhPT0gRU5DT0RFRF9UQUdfSU5UKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBleHBlY3RlZCBcImludFwiIGZvciBcInJcIicpO1xuXHR9XG5cblx0dmFyIHJMZW5ndGggPSBzaWduYXR1cmVbb2Zmc2V0KytdO1xuXG5cdGlmIChpbnB1dExlbmd0aCAtIG9mZnNldCAtIDIgPCByTGVuZ3RoKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdcInJcIiBzcGVjaWZpZWQgbGVuZ3RoIG9mIFwiJyArIHJMZW5ndGggKyAnXCIsIG9ubHkgXCInICsgKGlucHV0TGVuZ3RoIC0gb2Zmc2V0IC0gMikgKyAnXCIgYXZhaWxhYmxlJyk7XG5cdH1cblxuXHRpZiAobWF4RW5jb2RlZFBhcmFtTGVuZ3RoIDwgckxlbmd0aCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignXCJyXCIgc3BlY2lmaWVkIGxlbmd0aCBvZiBcIicgKyByTGVuZ3RoICsgJ1wiLCBtYXggb2YgXCInICsgbWF4RW5jb2RlZFBhcmFtTGVuZ3RoICsgJ1wiIGlzIGFjY2VwdGFibGUnKTtcblx0fVxuXG5cdHZhciByT2Zmc2V0ID0gb2Zmc2V0O1xuXHRvZmZzZXQgKz0gckxlbmd0aDtcblxuXHRpZiAoc2lnbmF0dXJlW29mZnNldCsrXSAhPT0gRU5DT0RFRF9UQUdfSU5UKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBleHBlY3RlZCBcImludFwiIGZvciBcInNcIicpO1xuXHR9XG5cblx0dmFyIHNMZW5ndGggPSBzaWduYXR1cmVbb2Zmc2V0KytdO1xuXG5cdGlmIChpbnB1dExlbmd0aCAtIG9mZnNldCAhPT0gc0xlbmd0aCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignXCJzXCIgc3BlY2lmaWVkIGxlbmd0aCBvZiBcIicgKyBzTGVuZ3RoICsgJ1wiLCBleHBlY3RlZCBcIicgKyAoaW5wdXRMZW5ndGggLSBvZmZzZXQpICsgJ1wiJyk7XG5cdH1cblxuXHRpZiAobWF4RW5jb2RlZFBhcmFtTGVuZ3RoIDwgc0xlbmd0aCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignXCJzXCIgc3BlY2lmaWVkIGxlbmd0aCBvZiBcIicgKyBzTGVuZ3RoICsgJ1wiLCBtYXggb2YgXCInICsgbWF4RW5jb2RlZFBhcmFtTGVuZ3RoICsgJ1wiIGlzIGFjY2VwdGFibGUnKTtcblx0fVxuXG5cdHZhciBzT2Zmc2V0ID0gb2Zmc2V0O1xuXHRvZmZzZXQgKz0gc0xlbmd0aDtcblxuXHRpZiAob2Zmc2V0ICE9PSBpbnB1dExlbmd0aCkge1xuXHRcdHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgdG8gY29uc3VtZSBlbnRpcmUgYnVmZmVyLCBidXQgXCInICsgKGlucHV0TGVuZ3RoIC0gb2Zmc2V0KSArICdcIiBieXRlcyByZW1haW4nKTtcblx0fVxuXG5cdHZhciByUGFkZGluZyA9IHBhcmFtQnl0ZXMgLSByTGVuZ3RoLFxuXHRcdHNQYWRkaW5nID0gcGFyYW1CeXRlcyAtIHNMZW5ndGg7XG5cblx0dmFyIGRzdCA9IEJ1ZmZlci5hbGxvY1Vuc2FmZShyUGFkZGluZyArIHJMZW5ndGggKyBzUGFkZGluZyArIHNMZW5ndGgpO1xuXG5cdGZvciAob2Zmc2V0ID0gMDsgb2Zmc2V0IDwgclBhZGRpbmc7ICsrb2Zmc2V0KSB7XG5cdFx0ZHN0W29mZnNldF0gPSAwO1xuXHR9XG5cdHNpZ25hdHVyZS5jb3B5KGRzdCwgb2Zmc2V0LCByT2Zmc2V0ICsgTWF0aC5tYXgoLXJQYWRkaW5nLCAwKSwgck9mZnNldCArIHJMZW5ndGgpO1xuXG5cdG9mZnNldCA9IHBhcmFtQnl0ZXM7XG5cblx0Zm9yICh2YXIgbyA9IG9mZnNldDsgb2Zmc2V0IDwgbyArIHNQYWRkaW5nOyArK29mZnNldCkge1xuXHRcdGRzdFtvZmZzZXRdID0gMDtcblx0fVxuXHRzaWduYXR1cmUuY29weShkc3QsIG9mZnNldCwgc09mZnNldCArIE1hdGgubWF4KC1zUGFkZGluZywgMCksIHNPZmZzZXQgKyBzTGVuZ3RoKTtcblxuXHRkc3QgPSBkc3QudG9TdHJpbmcoJ2Jhc2U2NCcpO1xuXHRkc3QgPSBiYXNlNjRVcmwoZHN0KTtcblxuXHRyZXR1cm4gZHN0O1xufVxuXG5mdW5jdGlvbiBjb3VudFBhZGRpbmcoYnVmLCBzdGFydCwgc3RvcCkge1xuXHR2YXIgcGFkZGluZyA9IDA7XG5cdHdoaWxlIChzdGFydCArIHBhZGRpbmcgPCBzdG9wICYmIGJ1ZltzdGFydCArIHBhZGRpbmddID09PSAwKSB7XG5cdFx0KytwYWRkaW5nO1xuXHR9XG5cblx0dmFyIG5lZWRzU2lnbiA9IGJ1ZltzdGFydCArIHBhZGRpbmddID49IE1BWF9PQ1RFVDtcblx0aWYgKG5lZWRzU2lnbikge1xuXHRcdC0tcGFkZGluZztcblx0fVxuXG5cdHJldHVybiBwYWRkaW5nO1xufVxuXG5mdW5jdGlvbiBqb3NlVG9EZXIoc2lnbmF0dXJlLCBhbGcpIHtcblx0c2lnbmF0dXJlID0gc2lnbmF0dXJlQXNCdWZmZXIoc2lnbmF0dXJlKTtcblx0dmFyIHBhcmFtQnl0ZXMgPSBnZXRQYXJhbUJ5dGVzRm9yQWxnKGFsZyk7XG5cblx0dmFyIHNpZ25hdHVyZUJ5dGVzID0gc2lnbmF0dXJlLmxlbmd0aDtcblx0aWYgKHNpZ25hdHVyZUJ5dGVzICE9PSBwYXJhbUJ5dGVzICogMikge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiJyArIGFsZyArICdcIiBzaWduYXR1cmVzIG11c3QgYmUgXCInICsgcGFyYW1CeXRlcyAqIDIgKyAnXCIgYnl0ZXMsIHNhdyBcIicgKyBzaWduYXR1cmVCeXRlcyArICdcIicpO1xuXHR9XG5cblx0dmFyIHJQYWRkaW5nID0gY291bnRQYWRkaW5nKHNpZ25hdHVyZSwgMCwgcGFyYW1CeXRlcyk7XG5cdHZhciBzUGFkZGluZyA9IGNvdW50UGFkZGluZyhzaWduYXR1cmUsIHBhcmFtQnl0ZXMsIHNpZ25hdHVyZS5sZW5ndGgpO1xuXHR2YXIgckxlbmd0aCA9IHBhcmFtQnl0ZXMgLSByUGFkZGluZztcblx0dmFyIHNMZW5ndGggPSBwYXJhbUJ5dGVzIC0gc1BhZGRpbmc7XG5cblx0dmFyIHJzQnl0ZXMgPSAxICsgMSArIHJMZW5ndGggKyAxICsgMSArIHNMZW5ndGg7XG5cblx0dmFyIHNob3J0TGVuZ3RoID0gcnNCeXRlcyA8IE1BWF9PQ1RFVDtcblxuXHR2YXIgZHN0ID0gQnVmZmVyLmFsbG9jVW5zYWZlKChzaG9ydExlbmd0aCA/IDIgOiAzKSArIHJzQnl0ZXMpO1xuXG5cdHZhciBvZmZzZXQgPSAwO1xuXHRkc3Rbb2Zmc2V0KytdID0gRU5DT0RFRF9UQUdfU0VRO1xuXHRpZiAoc2hvcnRMZW5ndGgpIHtcblx0XHQvLyBCaXQgOCBoYXMgdmFsdWUgXCIwXCJcblx0XHQvLyBiaXRzIDctMSBnaXZlIHRoZSBsZW5ndGguXG5cdFx0ZHN0W29mZnNldCsrXSA9IHJzQnl0ZXM7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gQml0IDggb2YgZmlyc3Qgb2N0ZXQgaGFzIHZhbHVlIFwiMVwiXG5cdFx0Ly8gYml0cyA3LTEgZ2l2ZSB0aGUgbnVtYmVyIG9mIGFkZGl0aW9uYWwgbGVuZ3RoIG9jdGV0cy5cblx0XHRkc3Rbb2Zmc2V0KytdID0gTUFYX09DVEVUXHR8IDE7XG5cdFx0Ly8gbGVuZ3RoLCBiYXNlIDI1NlxuXHRcdGRzdFtvZmZzZXQrK10gPSByc0J5dGVzICYgMHhmZjtcblx0fVxuXHRkc3Rbb2Zmc2V0KytdID0gRU5DT0RFRF9UQUdfSU5UO1xuXHRkc3Rbb2Zmc2V0KytdID0gckxlbmd0aDtcblx0aWYgKHJQYWRkaW5nIDwgMCkge1xuXHRcdGRzdFtvZmZzZXQrK10gPSAwO1xuXHRcdG9mZnNldCArPSBzaWduYXR1cmUuY29weShkc3QsIG9mZnNldCwgMCwgcGFyYW1CeXRlcyk7XG5cdH0gZWxzZSB7XG5cdFx0b2Zmc2V0ICs9IHNpZ25hdHVyZS5jb3B5KGRzdCwgb2Zmc2V0LCByUGFkZGluZywgcGFyYW1CeXRlcyk7XG5cdH1cblx0ZHN0W29mZnNldCsrXSA9IEVOQ09ERURfVEFHX0lOVDtcblx0ZHN0W29mZnNldCsrXSA9IHNMZW5ndGg7XG5cdGlmIChzUGFkZGluZyA8IDApIHtcblx0XHRkc3Rbb2Zmc2V0KytdID0gMDtcblx0XHRzaWduYXR1cmUuY29weShkc3QsIG9mZnNldCwgcGFyYW1CeXRlcyk7XG5cdH0gZWxzZSB7XG5cdFx0c2lnbmF0dXJlLmNvcHkoZHN0LCBvZmZzZXQsIHBhcmFtQnl0ZXMgKyBzUGFkZGluZyk7XG5cdH1cblxuXHRyZXR1cm4gZHN0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0ZGVyVG9Kb3NlOiBkZXJUb0pvc2UsXG5cdGpvc2VUb0Rlcjogam9zZVRvRGVyXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js\n");

/***/ }),

/***/ "(ssr)/./node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\nfunction getParamSize(keySize) {\n\tvar result = ((keySize / 8) | 0) + (keySize % 8 === 0 ? 0 : 1);\n\treturn result;\n}\n\nvar paramBytesForAlg = {\n\tES256: getParamSize(256),\n\tES384: getParamSize(384),\n\tES512: getParamSize(521)\n};\n\nfunction getParamBytesForAlg(alg) {\n\tvar paramBytes = paramBytesForAlg[alg];\n\tif (paramBytes) {\n\t\treturn paramBytes;\n\t}\n\n\tthrow new Error('Unknown algorithm \"' + alg + '\"');\n}\n\nmodule.exports = getParamBytesForAlg;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZWNkc2Etc2lnLWZvcm1hdHRlci9zcmMvcGFyYW0tYnl0ZXMtZm9yLWFsZy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ludmVudG9yeV9zeXN0ZW0vLi9ub2RlX21vZHVsZXMvZWNkc2Etc2lnLWZvcm1hdHRlci9zcmMvcGFyYW0tYnl0ZXMtZm9yLWFsZy5qcz81MzliIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZ2V0UGFyYW1TaXplKGtleVNpemUpIHtcblx0dmFyIHJlc3VsdCA9ICgoa2V5U2l6ZSAvIDgpIHwgMCkgKyAoa2V5U2l6ZSAlIDggPT09IDAgPyAwIDogMSk7XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbnZhciBwYXJhbUJ5dGVzRm9yQWxnID0ge1xuXHRFUzI1NjogZ2V0UGFyYW1TaXplKDI1NiksXG5cdEVTMzg0OiBnZXRQYXJhbVNpemUoMzg0KSxcblx0RVM1MTI6IGdldFBhcmFtU2l6ZSg1MjEpXG59O1xuXG5mdW5jdGlvbiBnZXRQYXJhbUJ5dGVzRm9yQWxnKGFsZykge1xuXHR2YXIgcGFyYW1CeXRlcyA9IHBhcmFtQnl0ZXNGb3JBbGdbYWxnXTtcblx0aWYgKHBhcmFtQnl0ZXMpIHtcblx0XHRyZXR1cm4gcGFyYW1CeXRlcztcblx0fVxuXG5cdHRocm93IG5ldyBFcnJvcignVW5rbm93biBhbGdvcml0aG0gXCInICsgYWxnICsgJ1wiJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UGFyYW1CeXRlc0ZvckFsZztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js\n");

/***/ })

};
;