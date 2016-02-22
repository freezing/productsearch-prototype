var Products = new Mongo.Collection("products");

function get(id) {
  return $("#" + id).value;
}

function clear(id) {
  $("#" + id).value = "";
}

if (Meteor.isClient) {
  Template.hello.events({
    'click .add' : function() {
      var title = get("title");
      var imageUrl = get("imageUrl");
      var url = get("url");
      var price = get("price");
      var category = get("category");
      var description = $("#description").val();
      Products.insert({title: title, imageUrl: imageUrl, url: url, price: price, category: category, description: description});

      clear("title");
      clear("imageUrl");
      clear("url");
      clear("price");
      clear("category");
      $("#description").value = "";
    }
  });
}



if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
