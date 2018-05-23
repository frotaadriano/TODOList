
app.directive('pasteExample', function(){
    var linkFn = function(scope, element, attrs) {
  
        element.on('paste', function() {
            
            setTimeout(function() {
                var link = '<a href="'+ element.val() + '">my link</a>';
                console.log(element.val());
                scope.pastedText = link; //element.val();
                scope.$apply();
            }, 1);
  
        });
    };
  
    return {
        restrict: 'A',
        link: linkFn
    };
  });