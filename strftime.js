var strftime = {};

strftime.categories = {
  'Year': 'yY',
  'Month': 'bBm',
  'Week': 'AaWU',
  'Day': 'dejuw',
  'Time': 'HIklMsS',
  'Date & Time Stamp': 'cDFrRTxX',
  'Misc.': 'CnpPtzZ%'
};

strftime.descriptions = {
  a: 'Abbriviated weekday name',
  A: 'Full weekday name',
  b: 'Abbrivated month name',
  B: 'Full month name',
  c: "Date and time representation",
  C: 'Century number. Year/100',
  d: 'Day of the month. Zero padded',
  D: 'American-styled date',
  e: 'Day of the month. Space padded',
  F: 'ISO 8601 date format',
  H: 'Hour in 24-hour notation. Zero padded',
  I: 'Hour in 12-hour notation. Zero padded',
  j: 'Day of the year. Zero padded',
  k: 'Hour in 24-hour notation. Space padded',
  l: 'Hour in 12-hour notation. Space padded',
  m: 'Month as number. Zero padded',
  M: 'Minute. Zero padded',
  n: 'A newline character',
  p: "AM/PM",
  P: "am/pm",
  r: '12-hour notation',
  R: '24-hour notation',
  s: 'Seconds since the Epoch',
  S: 'Second. Zero-padded',
  t: 'Tab character',
  T: '24-hour notation',
  u: 'Day of the week. 1(Monday)-7(Sunday)',
  U: 'Week of the year. First Sunday as the first day of week 01',
  w: 'Day of the week. 0(Sunday)-6(Saturday)',
  W: 'Week of the year. First Monday as the first day of week 01',
  x: "Locale's appropriate date representation",
  X: "Locale's appropriate time representation",
  y: 'Year without century',
  Y: 'Year with century',
  z: 'Timezone as hour offset from GMT',
  Z: 'Timezone or name or abbreviation',
  '%': 'A literal % character'
};
strftime.languages = {};
strftime.inherit = function(fields, language){
  language = language || {};
  fields = fields.split('');
  for(var i=0, l=fields.length; i<l; i++){
    language[fields[i]] = "%"+fields[i];
  }
  return language;
}
strftime.languages.Ruby = strftime.inherit('aAbBcCdDeFHIjklmMnpPrRsStTuUWwxXyYzZ%');
strftime.languages.Python = strftime.inherit('aAbBcdHIjmMpSUwWxXyYZ%');
strftime.languages.PHP = strftime.inherit('aAdejuwUWbBmCyYHIlMpPRrSTXzZcDxnt%');
