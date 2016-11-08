module.exports = [
  {
    pattern: "http://api.itboost.org:88/app_dev.php/api/community.get(.)community_id=?",
    fixtures: function (match, params, headers) {
      return [
       {"id"         : 3,
        "name"       : "hhhhh",
        "des"        : "ffff7890",
        "created_at" : "2016-07-29T21:07:43.989Z",
        "updated_at" : "2016-07-29T21:33:28.781Z"}
      ];
    },
    get: function (match, data) {
      return data
    }
  },
  {
    pattern: 'http://api.itboost.org:88/app_dev.php/api/community.getAll',
    fixtures: function (match, params, headers) {
      return [
        {"id" : 1,"name" : "nitro",   "des" : "super power racing"},
        {"id" : 2,"name" : "vvvv0122","des" : "vvvvvvvvvvvvvj"},
        {"id" : 3,"name" : "hhhhh","   des" : "ffff7890"},
        {"id" : 6,"name" : "last3",   "des" : "666666666666666"},
        {"id" : 8,"name" : "hyuuut",  "des" : "nnnnbbb"}
      ];
    },
    get: function (match, data) {
      return data
    }
  }
];