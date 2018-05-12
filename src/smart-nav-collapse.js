require(["jQuery"], function($) {

  function expand(chapter) {

    chapter.show();

    if (chapter.length != 0) {

      $children = $chapter.children('ul.articles');

      if ($children.length > 0) {
        $children.show();
      }
      expand(chapter.parent());
    }
  }


  $all_chapters = $('li.chapter');

  $all_chapters.on('click', function (e) {
    e.stopPropagation();
    $($all_chapters).children('ul.articles').hide();
    $chapter = $(this);
    expand($chapter);
  });

  // hide all chapters
  $($all_chapters).children('ul.articles').hide();
  $chapter = $('li.chapter.active');
  expand($chapter);

  // gitbook.events.bind("page.change", function() {
  //
  //   console.log("[smart-nav-collapse] Page changed")
  //
  //   $chapter = $('li.chapter.active');
  //
  //   expand($chapter);
  // });

});