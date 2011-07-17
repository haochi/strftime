function t(regex) {
  return function(template, values){
    return template.replace(regex, function(value, match) {
      value = values;
      match.replace(/[^.]+/g, function(match) {
        value = value[match];
      });
      return value;
    });
  }
}
