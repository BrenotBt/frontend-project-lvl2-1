export default `[
  {
    "state": "unchanged",
    "key": "common",
    "children": [
      {
        "state": "unchanged",
        "key": "setting1",
        "oldValue": "Value 1",
        "newValue": "Value 1"
      },
      {
        "state": "removed",
        "key": "setting2",
        "oldValue": "200"
      },
      {
        "state": "changed",
        "key": "setting3",
        "oldValue": true,
        "newValue": {
          "key": "value"
        }
      },
      {
        "state": "unchanged",
        "key": "setting6",
        "children": [
          {
            "state": "unchanged",
            "key": "key",
            "oldValue": "value",
            "newValue": "value"
          },
          {
            "state": "added",
            "key": "ops",
            "newValue": "vops"
          }
        ]
      },
      {
        "state": "added",
        "key": "follow",
        "newValue": false
      },
      {
        "state": "added",
        "key": "setting4",
        "newValue": "blah blah"
      },
      {
        "state": "added",
        "key": "setting5",
        "newValue": {
          "key5": "value5"
        }
      }
    ]
  },
  {
    "state": "unchanged",
    "key": "group1",
    "children": [
      {
        "state": "changed",
        "key": "baz",
        "oldValue": "bas",
        "newValue": "bars"
      },
      {
        "state": "unchanged",
        "key": "foo",
        "oldValue": "bar",
        "newValue": "bar"
      },
      {
        "state": "changed",
        "key": "nest",
        "oldValue": {
          "key": "value"
        },
        "newValue": "str"
      }
    ]
  },
  {
    "state": "removed",
    "key": "group2",
    "oldValue": {
      "abc": "12345"
    }
  },
  {
    "state": "added",
    "key": "group3",
    "newValue": {
      "fee": "100500",
      "another": "chance",
      "arbitrary": {
        "some": "water",
        "get": {
          "my": "balls"
        }
      }
    }
  }
]`;
