// Generated by CoffeeScript 1.6.1
(function() {

  this.util = new Util();

  this.Option = (function() {

    function Option() {
      $('#theme_label').text(chrome.i18n.getMessage('theme'));
      $('#font_size_label').text(chrome.i18n.getMessage('font_size'));
      $('#tab_size_label').text(chrome.i18n.getMessage('tab_size'));
      $('#key_binding_label').text(chrome.i18n.getMessage('key_binding'));
      $('#save_btn').text(chrome.i18n.getMessage('save'));
      _.each(_.range(8, 33), function(i) {
        return $('#font_size').append($("<option value=\"" + i + "\">" + i + "px</option>"));
      });
      chrome.storage.sync.get(['theme', 'font_size', 'key_binding', 'tab_size'], function(items) {
        if (!items.theme) {
          items.theme = 'monokai';
        }
        if (!items.font_size) {
          items.font_size = '12';
        }
        if (!items.key_binding) {
          items.key_binding = 'ace';
        }
        if (!items.tab_size) {
          items.tab_size = 4;
        }
        $('select#theme').val(items.theme);
        $('select#font_size').val(items.font_size);
        $('select#key_binding').val(items.key_binding);
        $('input#tab_size').val(items.tab_size);
        $('span#tab_size_value').text(items.tab_size);
        $('input#tab_size').change(function() {
          return $('span#tab_size_value').text($(this).val());
        });
        return $('button#save_btn').click(function() {
          var options;
          options = {
            'theme': $('select#theme').val(),
            'font_size': $('select#font_size').val(),
            'key_binding': $('select#key_binding').val(),
            'tab_size': $('input#tab_size').val()
          };
          return chrome.storage.sync.set(options, function() {
            return util.notice(chrome.i18n.getMessage('saved'), '');
          });
        });
      });
    }

    return Option;

  })();

  $(function() {
    return new Option();
  });

}).call(this);