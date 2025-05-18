"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteManyDocuments = exports.deleteOneDocument = exports.updateManyDocuments = exports.updateOneDocument = exports.findDocumentById = exports.findOneDocument = exports.findAllDocuments = exports.createDocument = void 0;

var _appError = _interopRequireDefault(require("../../../appError.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createDocument = function createDocument(model, data) {
  var doc;
  return regeneratorRuntime.async(function createDocument$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(model.create(data));

        case 2:
          doc = _context.sent;
          return _context.abrupt("return", doc);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.createDocument = createDocument;

var findAllDocuments = function findAllDocuments(model, query) {
  var docs;
  return regeneratorRuntime.async(function findAllDocuments$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(model.find(query));

        case 2:
          docs = _context2.sent;
          return _context2.abrupt("return", {
            total: docs.length,
            docs: docs
          });

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.findAllDocuments = findAllDocuments;

var findOneDocument = function findOneDocument(model, query) {
  var message,
      doc,
      _args3 = arguments;
  return regeneratorRuntime.async(function findOneDocument$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          message = _args3.length > 2 && _args3[2] !== undefined ? _args3[2] : "Document not found";
          _context3.next = 3;
          return regeneratorRuntime.awrap(model.findOne(query));

        case 3:
          doc = _context3.sent;

          if (doc) {
            _context3.next = 6;
            break;
          }

          throw new _appError["default"](message, 404);

        case 6:
          return _context3.abrupt("return", doc);

        case 7:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.findOneDocument = findOneDocument;

var findDocumentById = function findDocumentById(model, id) {
  var message,
      doc,
      _args4 = arguments;
  return regeneratorRuntime.async(function findDocumentById$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          message = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : "Document not found";
          _context4.next = 3;
          return regeneratorRuntime.awrap(model.findById(id));

        case 3:
          doc = _context4.sent;

          if (doc) {
            _context4.next = 6;
            break;
          }

          throw new _appError["default"](message, 404);

        case 6:
          return _context4.abrupt("return", doc);

        case 7:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.findDocumentById = findDocumentById;

var updateOneDocument = function updateOneDocument(model, query, data) {
  var options,
      message,
      doc,
      _args5 = arguments;
  return regeneratorRuntime.async(function updateOneDocument$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          options = _args5.length > 3 && _args5[3] !== undefined ? _args5[3] : {};
          message = _args5.length > 4 && _args5[4] !== undefined ? _args5[4] : "Document not found";
          _context5.next = 4;
          return regeneratorRuntime.awrap(model.findOneAndUpdate(query, data, options));

        case 4:
          doc = _context5.sent;

          if (doc) {
            _context5.next = 7;
            break;
          }

          throw new _appError["default"](message, 404);

        case 7:
          return _context5.abrupt("return", doc);

        case 8:
        case "end":
          return _context5.stop();
      }
    }
  });
};

exports.updateOneDocument = updateOneDocument;

var updateManyDocuments = function updateManyDocuments(model, query, data) {
  var options,
      message,
      result,
      _args6 = arguments;
  return regeneratorRuntime.async(function updateManyDocuments$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          options = _args6.length > 3 && _args6[3] !== undefined ? _args6[3] : {};
          message = _args6.length > 4 && _args6[4] !== undefined ? _args6[4] : "No documents were updated";
          _context6.next = 4;
          return regeneratorRuntime.awrap(model.updateMany(query, data, options));

        case 4:
          result = _context6.sent;

          if (!(result.modifiedCount === 0)) {
            _context6.next = 7;
            break;
          }

          throw new _appError["default"](message, 404);

        case 7:
          return _context6.abrupt("return", result);

        case 8:
        case "end":
          return _context6.stop();
      }
    }
  });
};

exports.updateManyDocuments = updateManyDocuments;

var deleteOneDocument = function deleteOneDocument(model, query) {
  var message,
      doc,
      _args7 = arguments;
  return regeneratorRuntime.async(function deleteOneDocument$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          message = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : "Document not found";
          _context7.next = 3;
          return regeneratorRuntime.awrap(model.findOneAndDelete(query));

        case 3:
          doc = _context7.sent;

          if (doc) {
            _context7.next = 6;
            break;
          }

          throw new _appError["default"](message, 404);

        case 6:
          return _context7.abrupt("return", true);

        case 7:
        case "end":
          return _context7.stop();
      }
    }
  });
};

exports.deleteOneDocument = deleteOneDocument;

var deleteManyDocuments = function deleteManyDocuments(model, query) {
  var message,
      result,
      _args8 = arguments;
  return regeneratorRuntime.async(function deleteManyDocuments$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          message = _args8.length > 2 && _args8[2] !== undefined ? _args8[2] : "No documents were deleted";
          _context8.next = 3;
          return regeneratorRuntime.awrap(model.deleteMany(query));

        case 3:
          result = _context8.sent;

          if (!(result.deletedCount === 0)) {
            _context8.next = 6;
            break;
          }

          throw new _appError["default"](message, 404);

        case 6:
          return _context8.abrupt("return", true);

        case 7:
        case "end":
          return _context8.stop();
      }
    }
  });
};

exports.deleteManyDocuments = deleteManyDocuments;