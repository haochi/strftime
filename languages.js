strftime.commons = {
  D: '%m/%d/%y',
  F: '%Y-%m-%d',
  n: '\n',
  t: '\t',
  r: '%I:%M:%S %p',
  R: '%H:%M',
  T: '%H:%M:%S'
};

strftime.languages.Ruby = strftime.inherit('aAbBcCdDeFHIjklmMnpPrRsStTuUWwxXyYzZ%');
strftime.languages.Python = strftime.inherit('aAbBcdHIjmMpSUwWxXyYZ%', strftime.extend_support('DFntrRT'));
strftime.languages.PHP = strftime.inherit('aAdejuwUWbBmCyYHIlMpPRrSTXzZcDxnt%', strftime.extend_support('F'));
strftime.languages["C++"] = strftime.inherit('aAbBcdHIjmMpSUwWxXyYZ%', strftime.extend_support('DFnrRtT'));
