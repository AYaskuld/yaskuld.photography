var myCOOKIE = {
  set: function(cookieNAME, cookieVALUE, expireDAYS, path) {
    var d = new Date();
    d.setTime(d.getTime() + (expireDAYS * 24 * 60 * 60 * 1000));
    var cookieEXPIRE = 'expires=' + d.toUTCString();
    document.cookie = cookieNAME + '=' + cookieVALUE + '; ' + cookieEXPIRE + ((path) ? 'path=' + path : '');
  },
  get: function(cookieNAME) {
    cookieNAME = cookieNAME + '=';
    var ca     = document.cookie.split('; '),
        result = '';
    ca.map(function (currentCOOKIE) {
      (currentCOOKIE.indexOf(cookieNAME) === 0) ? result = currentCOOKIE.slice(cookieNAME.length) : '';
    });
    return result;
  },
  del: function(cookieNAME) {
    document.cookie = cookieNAME + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC'; 
  }
};
$(document.head).append('<style>' +
  '.age18{position:fixed; z-index:10000; width:100%; height:100%; top:0px; left:0px; background:rgba(0, 0, 0, 0.90); }' +
  '.age18 span{display:block; margin:200px auto 0; width:600px; line-height:1.5; height:auto; text-align:center; background: rgba(255, 4, 4, 0.55); color:white!important; padding:60px; border:2px solid #800000; border-radius:0px; }' +
  '.age18 span a{display:inline-block; width:100px; text-align:center; text-decoration:none; font:bold 14px/1 sans-serif; color:white!important; padding:8px; margin:0; }' +
'</style>');
if (!myCOOKIE.get('Y18')) {
  $(document.body).append(
    '<div class="age18">' +
    '<span>' +
    '<b><h3>Внимание!</h3></b>Вы собираетесь зайти на сайт с материалами для <b>взрослых</b>.<br><b>Лицам младше 18 лет вход строго запрещен.</b><br><br>' +
    'Нажимая кнопку "<b>Продолжить</b>", Вы подтверждаете, что Вам более 18 лет и Вы согласны просматривать материалы, предназначенные только для взрослых.<br><br>' +
    'Если Вам менее 18 лет - пожалуйста, закройте вкладку браузера, чтобы покинуть сайт.<br><br>' +
    '<a href="https://www.youtube.com/watch?v=n9lWzHnDEQw" style="background:green;">Отказаться</a>' +
    '&nbsp; &nbsp; &nbsp;' +
    '<a href="/" style="background:gray;" onclick="myCOOKIE.set(\'Y18\', \'1\', 1, \'/\'); $(\'.age18\').remove(); return false;">Продолжить</a>' +
    '</span>' +
    '</div>'
  );
}
