/*
 * Controls the templates fetched, controllers to instantiate
 *
 */
function config($httpProvider, $compileProvider, $stateProvider, $urlRouterProvider) {
    // ui.router
    $stateProvider
        .state('parent', {
            abstract: true,
            template: '<ui-view/>'
        })
        // setup a parent.inbox state
        .state('parent.preview', {
            // tell it what URL we want
            url: '/preview',
            data: {
                title: 'Listing preview',
                breadcrumb: 'Listing preview'
            },
            views: {
                '@': {
                   templateUrl: 'partials/views/preview.html',
                   controller: 'previewCtrl as vm'
                }
            },
            resolve: previewCtrl.resolve
        });
        /* .state('parent.dashboard.person', {
            url: '/:id',
            views: {
                'email@parent.inbox': {
                    templateUrl: 'partials/email.html',
                    controller: 'EmailCtrl as vm'
                }
            },
            resolve: EmailCtrl.resolve
        }); */

    $urlRouterProvider.otherwise('/preview');
    $httpProvider.useApplyAsync(true);
    $compileProvider.debugInfoEnabled(false);

}


// controls the dynamic page titles
function run($rootScope) {
    var page = {
        setBreadcrumb: function (name) {
            this.breadcrumb = name;
        },
        setTitle: function (title) {
            this.title = 'ng-booktime: ' + title;
        }
    };

    function setTitle(event, state) {
        page.setBreadcrumb(state && state.data ? state.data.breadcrumb : '');
        page.setTitle(state && state.data ? state.data.title : '');
    }

    // exports
    $rootScope.page = page;
    $rootScope.$on('$stateChangeSuccess', setTitle);

}

angular
    .module('/* @echo application_name */')
    .run(run)
    .config(config);
