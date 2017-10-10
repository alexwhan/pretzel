import DS from 'ember-data';

import PartialModelRESTSerializer from 'ember-data-partial-model/mixins/rest-serializer';

export default DS.RESTSerializer.extend(PartialModelRESTSerializer, {
  //primaryKey: '_id'

  // handling generically for loopback response structure
  // ember requires data nested under a root property
  // which relates to the resource name, such as 'geneticmaps'
  normalizeFindAllResponse: function(store, type, payload, requestType) {
    var payloadTemp = {}
    payloadTemp[type.modelName] = payload;
    return this._super(store, type, payloadTemp, requestType);
  },
  extractSingle: function(store, type, payload, id) {
    var payloadTemp = {}
    payloadTemp[type.modelName] = [payload];
    return this._super(store, type, payloadTemp, id);
  },
  normalizeQueryResponse: function(store, type, payload, id, requestType) {
    var payloadTemp = {}
    payloadTemp[type.modelName] = payload;
    return this._super(store, type, payloadTemp, id, requestType);
  },
  normalizeFindRecordResponse: function(store, type, payload, id, requestType) {
    var payloadTemp = {}
    payloadTemp[type.modelName] = payload;
    return this._super(store, type, payloadTemp, id, requestType);
  },
});
