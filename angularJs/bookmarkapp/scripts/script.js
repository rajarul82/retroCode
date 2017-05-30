angular.module('bookmarkApp', [])

.controller('bookmarkController', [
            '$scope',
            function($scope) {
              $scope.bookMarks = JSON.parse(localStorage.getItem("bookmark"));
              $scope.siteName = "";
              $scope.siteAddress = "";

              $scope.isUrlValid = function () {
                var res = $scope.siteAddress.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
                if(res == null)
                    return false;
                else
                    return true;
              }
              debugger;
              $scope.visitBookmark = function(address) {

                window.open(address);
              }
              $scope.deleteBookmark = function(index) {
                $scope.bookMarks.splice(index, 1);
                localStorage.setItem("bookmark", JSON.stringify($scope.bookMarks));
              }

              this.saveBookmark = function() {
                var bookMarks = [];
                var item = {};
                item.name = $scope.siteName;
                item.address= $scope.siteAddress;

                if (localStorage.getItem("bookmark")) {
                  bookMarks = JSON.parse(localStorage.getItem("bookmark"));
                }

                bookMarks.push(item);
                localStorage.setItem("bookmark", JSON.stringify(bookMarks));
                $scope.bookMarks = JSON.parse(localStorage.getItem("bookmark"));
                $scope.siteName ="";
                $scope.siteAddress="";
              }
            }
]);
