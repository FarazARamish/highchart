(function($, nativeWrite) {
    var writeStyleSheetLink = function(value) {
        if (!stylesheetIsEmbedded) {
            $("head:first").append(value);
            stylesheetIsEmbedded = true;
        }
        document.write = writeGistContent;
    };
    var writeGistContent = function(value) {
        files = {};
        files.ordered = [];
        var gistContent = $(value);
        gistContent.find("div.gist-file").each(
            function() {
                var gistFile = $(this);
                var metaTags = gistFile.find("div.gist-meta a").filter(function() {
                    return ($(this).text().search(new RegExp("^\\s*(view raw|this gist|github)", "i")) === -1);
                });
                var fileName = $.trim(metaTags.first().text());
                var content = $("<div class='gist'></div>").append(gistFile);
                files[fileName] = {
                    fileName: fileName,
                    content: content
                };
                files.ordered.push(files[fileName]);
            }
        );
    };
    var stylesheetIsEmbedded = false;
    var files = null;
    $.getGist = function(gistID) {
        document.write = writeStyleSheetLink;
        var result = $.Deferred();
        $.ajax({
            url: ("https://gist.github.com/" + gistID + ".js"),
            dataType: "script",
            success: function() {
                result.resolve(files);
            },
            error: function(jqXHR, status, error) {
                result.reject(status, error);
            },
            complete: function() {
                document.write = nativeWrite;
            }
        });
        return (result.promise());
    };
})(jQuery, document.write);