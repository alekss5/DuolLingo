const { Realm, createRealmContext } = require('@realm/react');

class User extends Realm.Object {
  constructor() {
    super(...arguments);
  }
}

User.schema = {
  name: 'User',
  primaryKey: '_id',
  properties: {
    _id: 'objectId',
    email: 'string',
    password: 'string',
  },
};

const RealmContext = createRealmContext({
  schema: [User],
});

module.exports = {
  User,
  RealmContext,
};
