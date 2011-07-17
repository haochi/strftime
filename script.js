var tofu = t(/{ *([^} ]+) *}/g),
    now = new Date;
$(function(){
  var categories = $("<ul>"),
      languages = $("<select>"),
      errors = $("#errors"),
      textarea = $("#strftime");

  // languages
  $.each(strftime.languages, function(language_name){
    $("<option>").text(language_name).appendTo(languages);
  });
  $("#languages").replaceWith(languages);

  // draggables
  $.each(strftime.categories, function(category_name, fields){
    var category = $("<select>");
    $("<option>").val("").text(category_name).appendTo(category);
    $.each(fields.split(""), function(i, field){
      $("<option>").val(field).text([now.strftime("%"+field), strftime.descriptions[field]].join(": ")).appendTo(category);
    });
    $("<li>").append($("<span>")).append(category).appendTo(categories);
  });
  $("<li>").append($("<span>")).append($("<input>").attr("type", "text")).appendTo(categories);
  $("#draggable").replaceWith(categories.attr("id", "draggable"));
  $("#draggable li").draggable({
    connectToSortable: "#sortable",
    helper: "clone", revert: "invalid"
  });
  
  // sortables
  $("ul.sortable").sortable({
    revert: true,
    connectWith: "#trash",
    dropOnEmpty: true,
    placeholder: "ui-state-highlight",
    update: function(event, ui) {
      if(this.id == "trash") {
        $(ui.item).remove();
      }
      $("#sortable select, #sortable input").eq(0).trigger("change");
    } 
  });
  $("#trash").sortable("option", "cancel", "li");

  $("#sortable").delegate("select, input", "change", function(){
    var language = languages.find("option:selected").val(),
        values, format;
    errors.empty();
    values = $("#sortable input:text, #sortable select option:selected").map(function(){
      var val = $(this).val();
      if(val && $(this).get(0).tagName.toLowerCase() == "option"){
        var lang = strftime.languages[language];
        if(val in lang){
          val = lang[val];
        }else{
          val = "%"+val;
          errors.append($("<li>").text(tofu("[{ language } doesn't support { field }]", { language: language, field: val })));
        }
      }else{
        val.replace(/%/g, '%%');
      }
      return val;
    });
    format = values.get().join("");
    textarea.val(format);
    $("#strftime-show").text("Preview: " + Date.strftime(format));
  });
  
  $("#sortable").delegate("input[type='text']", "click", function(){
    $(this).focus(); // no idea why I would need this for Firefox
  });

  // misc
  $("#content ul, #content li").disableSelection();
});
