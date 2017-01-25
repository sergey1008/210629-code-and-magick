'use strict';

window.renderStatistics = function (ctx, names, times) {
  var colorText = '#000';

  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  ctx.fillStyle = colorText;
  ctx.font = '16px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var histoHeight = 150;
  var histoX = 140;
  var columnIndent = 90;
  var step = histoHeight / getMaxSearch(times);

  for (var i = 0; i < times.length; i++) {
    var name = names[i];
    var time = times[i];
    var height = step * time;
    var colorColumn = getColor(name);

    ctx.fillText(time.toFixed(0), histoX + columnIndent * i, 90 + histoHeight - height);
    ctx.fillStyle = colorColumn;
    ctx.fillRect(histoX + columnIndent * i, 100 + histoHeight - height, 40, height);
    ctx.fillStyle = colorText;
    ctx.fillText(name, histoX + columnIndent * i, 100 + histoHeight + 20);
  }

  function getMaxSearch(timeslist) {
    var max = -1;
    for (var j = 0; j < timeslist.length; j++) {
      var timelist = times[j];
      if (timelist > max) {
        max = timelist;
      }
    }
    return max;
  }

  function getColor(username) {
    if (name === 'Вы') {
      return 'rgba(255, 0, 0, 1)';
    } else {
      return ['rgba(0, 0, ', (Math.random() * 255).toFixed(0), ',', (Math.random() * 0.5).toFixed(1), ')'].join('');
    }
  }
};
