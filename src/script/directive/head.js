'use strict';

/*
先引用之前定义的app模块 
再创建 appHead 指令，返回一个函数
再返回对象 return ，有三个属性
restrict： 调用方式有四种，A  标签
replace: 替换，true时替换父元素，把父元素的属性加在自己身上。只有一个根元素
templateUrl:指向模板的位置
*/

angular.module('app').directive('appHead', ['cache', function(cache){
  return {
    restrict: 'A', 
    replace: true, 
    templateUrl: 'view/template/head.html', 
    link: function($scope) {
      $scope.name = cache.get('name') || '';
    }
  };
}]);
