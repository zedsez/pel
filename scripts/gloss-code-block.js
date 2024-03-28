// document.addEventListener("DOMContentLoaded", function() {
//     var glossBlocks = document.querySelectorAll('.gloss-code-block');
//     var exampleCounter = 1;
  
//     glossBlocks.forEach(function(block) {
//       var lines = block.textContent.trim().split('\n');
//       var html = '<div class="example-number">(' + exampleCounter++ + ')</div>';
//       html += '<div class="example-content">';
  
//       lines.forEach(function(line) {
//         html += '<div class="line">' + line + '</div>';
//       });
  
//       html += '</div>';
//       block.innerHTML = html;
//     });
//   });

document.addEventListener("DOMContentLoaded", function() {
    var glossBlocks = document.querySelectorAll('.gloss-code-block');
    var exampleCounter = 1;
    glossBlocks.forEach(function(block) {
      var lines = block.textContent.trim().split('\n');
      var html = '<div class="example-number">(' + exampleCounter++ + ')</div>';
      html += '<div class="example-content">';
      lines.forEach(function(line) {
        html += '<div class="line">' + line + '</div>';
      });
      html += '</div>';
      block.innerHTML = html;
    });
  });
  

// document.addEventListener("DOMContentLoaded", function () {
//     var glossBlocks = document.querySelectorAll('.gloss-code-block');
//     var exampleCounter = 1;
//     glossBlocks.forEach(function (block) {
//         var lines = block.textContent.trim().split('\n');
//         var html = '<div class="example-number">' + exampleCounter++ + '.</div>';
//         var words = lines[0].split(/\s+/);
//         var glosses = lines[1].split(/\s+/);
//         html += '<div class="line">';
//         words.forEach(function (word, index) {
//             html += '<div class="word">' + word + '</div>';
//         });
//         html += '</div><div class="line">';
//         glosses.forEach(function (gloss, index) {
//             html += '<div class="gloss">' + gloss + '</div>';
//         });
//         html += '</div>';
//         html += '<div class="free-transl">' + lines[2] + '</div>';
//         block.innerHTML = html;
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//     var glossBlocks = document.querySelectorAll('.gloss-code-block');
//     glossBlocks.forEach(function (block) {
//         var lines = block.textContent.trim().split('\n');
//         var html = '';
//         lines.forEach(function (line, index) {
//             var parts = line.split('\\');
//             html += '<div class="line">';
//             parts.forEach(function (part) {
//                 html += '<div class="' + (index === 0 ? 'word' : 'gloss') + '">' + part.trim() + '</div>';
//             });
//             html += '</div>';
//         });
//         block.innerHTML = html;
//     });
// });


