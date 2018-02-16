(function () {

    angular.module('app')
            .controller('AllActivitiesController', ['dataService', 'notifier', '$location','activities', AllActivitiesController]);

    function AllActivitiesController(dataService, notifier, $location, activities) {

        var vm = this;

        vm.selectedMonth = 1; // default to January
        
        vm.allActivities = activities;

        vm.search = function () {
            var classroomDetailUrl = '/classrooms/' + vm.selectedClassroom.id + '/detail/' + vm.selectedMonth;
            $location.url(classroomDetailUrl);
        };

        dataService.getAllClassrooms()
                .then(function (classrooms) {
                    vm.allClassrooms = classrooms;
                    vm.selectedClassroom = classrooms[0];
                })
                .catch(showError);

//        dataService.getAllActivities()
//                .then(function (activities) {
//                    vm.allActivities = activities;
//                })
//                .catch(showError);

        function showError(message) {
            notifier.error(message);
        }

    }

}());