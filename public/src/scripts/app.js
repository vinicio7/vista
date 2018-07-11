;(function() {
	"use strict";

	angular.module("app", [
		/* Angular modules */
		"ngRoute",
		"ngAnimate",
		"ngSanitize",
		"ngAria",
		"ngMaterial",

		/* 3rd party modules */
		"oc.lazyLoad",
		"ui.bootstrap",
		"angular-loading-bar",
		"FBAngular",
	
		/* custom modules */
		"app.ctrls",
		"app.directives",
		"app.ui.ctrls",
		"app.ui.directives",
		"app.form.ctrls",
		"app.table.ctrls",
		"app.email.ctrls",
		"app.todo"
		
	])


	// disable spinner in loading-bar
	.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
	    cfpLoadingBarProvider.includeSpinner = false;
	     cfpLoadingBarProvider.latencyThreshold = 500;
	}])

	// lazy loading scripts refernces of angular modules only
	.config(["$ocLazyLoadProvider", function($oc) {
		$oc.config({
			debug: true,
			event: false,
			modules: [{
				name: "angularBootstrapNavTree",
				files: ["scripts/lazyload/abn_tree_directive.js", "styles/lazyload/abn_tree.css"]
			},
			{
				name: "ui.calendar",
				serie: true,	// load files in series
				files: [
					"scripts/lazyload/moment.min.js", 
					"scripts/lazyload/fullcalendar.min.js",  
					"styles/lazyload/fullcalendar.css",  
					"scripts/lazyload/calendar.js"
				]
			},
			{
				name: "ui.select",
				files: ["scripts/lazyload/select.min.js", "styles/lazyload/select.css"]
			},
			{
				name: "ngTagsInput",
				files: ["scripts/lazyload/ng-tags-input.min.js", "styles/lazyload/ng-tags-input.css"]
			},
			{
				name: "colorpicker.module",
				files: ["scripts/lazyload/bootstrap-colorpicker-module.min.js", "styles/lazyload/colorpicker.css"]
			},
			{
				name: "ui.slider",
				serie: true,
				files: ["scripts/lazyload/bootstrap-slider.min.js", "scripts/lazyload/directives/bootstrap-slider.directive.js", "styles/lazyload/bootstrap-slider.css"]
			},
			{
				name: "textAngular",
				serie: true,
				files: ["scripts/lazyload/textAngular-rangy.min.js",  "scripts/lazyload/textAngular.min.js", "scripts/lazyload/textAngularSetup.js", "styles/lazyload/textAngular.css"]
			},
			{
				name: "flow",
				files: ["scripts/lazyload/ng-flow-standalone.min.js"]
			},
			{
				name: "ngImgCrop",
				files: ["scripts/lazyload/ng-img-crop.js", "styles/lazyload/ng-img-crop.css"]
			},
			{
				name: "ngMask",
				files: ["scripts/lazyload/ngMask.min.js"]
			},
			{
				name: "angular-c3",
				files: ["scripts/lazyload/directives/c3.directive.js"]
			},
			{
				name: "easypiechart",
				files: ["scripts/lazyload/angular.easypiechart.min.js"]
			},
			{
				name: "ngMap",
				files: ["scripts/lazyload/ng-map.min.js"]
			},
			{
                    name: "app.service.contactos",
                    files: ["scripts/lazyload/services/contactos.js"]
            },
            {
                    name: "app.service.propiedades",
                    files: ["scripts/lazyload/services/propiedades.js","scripts/lazyload/ng-flow-standalone.min.js"]
            },
            {
                    name: "app.service.reportes",
                    files: ["scripts/lazyload/services/reportes.js"]
            },
            {
                    name: "app.service.reportepropiedades",
                    files: ["scripts/lazyload/services/reportepropiedades.js"]
            },
            {
                    name: "app.service.reportemetas",
                    files: ["scripts/lazyload/services/reportemetas.js"]
            },
            {
                    name: "app.service.reporteventas",
                    files: ["scripts/lazyload/services/reporteventas.js"]
            },
            {
                    name: "app.service.usuarios",
                    files: ["scripts/lazyload/services/usuarios.js"]
            },
            {
                    name: "app.service.supervisores",
                    files: ["scripts/lazyload/services/supervisores.js"]
            },
            {
                    name: "app.service.sectoristas",
                    files: ["scripts/lazyload/services/sectoristas.js"]
			},
			{
                    name: "app.service.sectores",
                    files: ["scripts/lazyload/services/sectores.js"]
			},
			{
					name: "app.service.voceadores",
					files: ["scripts/lazyload/services/voceadores.js"]
			},
            {
                    name: "app.service.reporteventas",
                    files: ["scripts/lazyload/services/reporteventas.js"]
            },
            {
                    name: "app.service.estado",
                    files: ["scripts/lazyload/services/estado.js"]
            },
            {
                    name: "app.service.reportecontactos",
                    files: ["scripts/lazyload/services/reportecontactos.js"]
            },
            {
                    name: "app.service.asignacion",
                    files: ["scripts/lazyload/services/asignacion.js"]
            },
            {
                    name: "app.service.inmuebles",
                    files: ["scripts/lazyload/services/inmuebles.js"]
            },
            {
                    name: "app.service.fincas",
                    files: ["scripts/lazyload/services/fincas.js"]
            },
            {
                    name: "app.service.equipos",
                    files: ["scripts/lazyload/services/equipos.js"]
            },
            {
                    name: "app.service.ambiente",
                    files: ["scripts/lazyload/services/ambiente.js"]
            },
            {
                    name: "app.service.mercados",
                    files: ["scripts/lazyload/services/mercados.js"]
            },
            {
                    name: "app.service.antiguedad",
                    files: ["scripts/lazyload/services/antiguedad.js"]
            },
            {
                    name: "app.service.zonas",
                    files: ["scripts/lazyload/services/zonas.js"]
            },
            {
                    name: "app.service.bancos",
                    files: ["scripts/lazyload/services/bancos.js"]
            },
            {
                    name: "app.service.personas",
                    files: ["scripts/lazyload/services/personas.js"]
            },
            {
                    name: "app.service.construcciones",
                    files: ["scripts/lazyload/services/construcciones.js"]
            },
            {
                    name: "app.service.mantenimientos",
                    files: ["scripts/lazyload/services/mantenimientos.js"]
            },
            {
                    name: "app.service.municipio",
                    files: ["scripts/lazyload/services/municipio.js"]
            },
            {
                    name: "app.service.departamento",
                    files: ["scripts/lazyload/services/departamento.js"]
            },
            {
                    name: "app.service.paises",
                    files: ["scripts/lazyload/services/paises.js"]
            },
// mantenimientos
            {
                    name: "app.service.equipospropiedad",
                    files: ["scripts/lazyload/services/equipospropiedad.js"]
            },
            {
                    name: "app.service.caracteristicas",
                    files: ["scripts/lazyload/services/caracteristicas.js"]
            },
            {
                    name: "app.service.serviciospropiedades",
                    files: ["scripts/lazyload/services/serviciospropiedades.js"]
            },
            {
                    name: "app.service.tipocontactos",
                    files: ["scripts/lazyload/services/tipocontactos.js"]
            },
            {
                    name: "app.service.estadocivil",
                    files: ["scripts/lazyload/services/estadocivil.js"]
            },
                        {
                    name: "app.service.visitas",
                    files: ["scripts/lazyload/services/visitas.js"]
            },
// fin mantenimientos
            {
                    name: "app.service.pedidos",
                    files: ["scripts/lazyload/services/pedidos.js"]
            },
			{
					name: "app.service.adicionales",
					files: ["scripts/lazyload/services/adicionales.js"]
			},
			{
					name: "app.service.subsectores",
					files: ["scripts/lazyload/services/subsectores.js"]
			},
			{
					name: "app.service.informacion",
					files: ["scripts/lazyload/services/informacion.js"]
			}
			// {
			// 		name: "app.service.pedidos",
			// 		files: ["scripts/lazyload/services/pedidos.js"]
			// }

			]
		})
	}])
	

	// jquery/javascript and css for plugins via lazy load
	.constant("JQ_LOAD", {
		fullcalendar: [],
		moment: ["scripts/lazyload/moment.min.js"],
		sparkline: ["scripts/lazyload/jquery.sparkline.min.js"],
		c3: ["scripts/lazyload/d3.min.js", "scripts/lazyload/c3.min.js", "styles/lazyload/c3.css"],
		gmaps: ["https://maps.google.com/maps/api/js?key=AIzaSyDc6HpDStdD6JhTTuUICCdTA1TC3-Bb0xg"]
	})

	// route provider
	.config(["$routeProvider", "$locationProvider", "JQ_LOAD", function($routeProvider, $locationProvider, jqload) {

		

		var routes = [
			"ui/buttons", "ui/typography", "ui/grids", "ui/panels", "ui/tabs", "ui/modals", "ui/progress-bars", "ui/extras",
			"icons/font-awesome", "icons/ionicons", 
			"forms/wizard", 
			"tables/tables",
			"pages/signin", "pages/signup", "pages/404", "pages/forget-pass", "pages/lock-screen", "pages/invoice", "pages/search", "pages/timeline"
		];

		function setRoutes(route) {
			var url = '/' + route,
				config = {
					templateUrl: "views/" + route + ".html"
				};

			$routeProvider.when(url, config);
			return $routeProvider;
		}

		routes.forEach(function(route) {
			setRoutes(route);
		});

		$routeProvider
			.when("/", {redirectTo: "/informacion"})
			.when("/404", {templateUrl: "views/pages/404.html"})
			.otherwise({redirectTo: "/404"});



		// $routeProvider.when("/dashboard", {
		// 	templateUrl: "views/dashboard.html",
		// 	//controller: "DashboardController",
		// 	resolve: {
		// 		deps: ["$ocLazyLoad", function(a) {
		// 			return a.load([jqload.c3, jqload.sparkline])
		// 			.then(function() {
		// 				return a.load({
		// 					name: "app.directives",
		// 					files: ["scripts/lazyload/directives/sparkline.directive.js"]
		// 				})
		// 			})
		// 			.then(function() {
		// 				return a.load("angular-c3");
		// 			})
		// 			.then(function() {
		// 				return a.load("easypiechart");
		// 			})
		// 			// .then(function() {
		// 			// 	return a.load({
  //    //                    name: 'app.usuarios',
  //    //                    files: ['scripts/lazyload/controllers/dashboard.js']
		// 			// })

		// 		}]
		// 	}
		// });


		// text angular loaded in email/inbox
		// $routeProvider.when("/email/inbox", {
		// 	templateUrl: "views/email/inbox.html",
		// 	resolve: {
		// 		deps: ["$ocLazyLoad", function(a) {
		// 			return a.load("textAngular");
		// 		}]
		// 	}
		// });


		// calendar plugin
		// "scripts/lazyload/apps/calendarDemo.js"
		// $routeProvider.when("/usuarios", {
		// 	templateUrl: "views/usuarios.html",
		// 	controller: "UsuariosController",
		// 	resolve: {
		// 		deps: ["$ocLazyLoad", function(a) {
		// 			return a.load("ui.calendar")
		// 			.then(function() {
		// 				return a.load({
		// 					name: "app.ctrls",
		// 					files: ["scripts/lazyload/controllers/usuarios.js"]
		// 				})
		// 			});
		// 		}]
		// 	}
		// });


		// Material Controller (For demo)
		$routeProvider.when("/material", {
			templateUrl: "views/material.html",
			resolve: {
				deps: ["$ocLazyLoad", function(a) {
					return a.load({
						name: "app.ctrls",
						files: ["scripts/lazyload/controllers/materialCtrl.js"]
					})
				}]
			}
		});

		// tree view plugin
		$routeProvider.when("/ui/treeview", {
			templateUrl: "views/ui/treeview.html",
			resolve: {
				deps: ["$ocLazyLoad", function(a) {
					return a.load("angularBootstrapNavTree")
					.then(function() {
						return a.load({
							name: "app.ctrls",
							files: ["scripts/lazyload/controllers/treeviewCtrl.js"]
						})
					})
				}]
			}
		});

		// load ui-select when notification page load.
		$routeProvider.when("/ui/notifications", {
			templateUrl: "views/ui/notifications.html",
			resolve: {
				deps: ["$ocLazyLoad", function(a) {
					return a.load("ui.select");
				}]
			}
		});

		// load ui-select in form-elements
		$routeProvider.when("/forms/elements", {
			templateUrl: "views/forms/elements.html",
			resolve: {
				deps: ["$ocLazyLoad", function(a) {
					return a.load(["ui.select", "ngTagsInput", "colorpicker.module", "ui.slider"])
					.then(function() {
						return a.load({
							name: "app.ctrls",
							files: ["scripts/lazyload/controllers/selectCtrl.js", "scripts/lazyload/controllers/tagsInputCtrl.js"]
						})
					})
					.then(function() {
						return a.load("textAngular");
					})

				}]
			}
		});


		// file uploader in form-elements
		$routeProvider.when("/forms/uploader", {
			templateUrl: "views/forms/uploader.html",
			resolve: {
				deps: ["$ocLazyLoad", function(a) {
					return a.load("flow");
				}]
			}
		});

		// Image Crop in form-elements
		$routeProvider.when("/forms/imagecrop", {
			templateUrl: "views/forms/imagecrop.html",
			resolve: {
				deps: ["$ocLazyLoad", function(a) {
					return a.load("ngImgCrop")
					.then(function() {
						return a.load({
							name: "app.ctrls",
							files: ["scripts/lazyload/controllers/imageCropCtrl.js"]
						})
					})
				}]
			}
		});

		// Form validation
		$routeProvider.when("/forms/validation", {
			templateUrl: "views/forms/validation.html",
			resolve: {
				deps: ["$ocLazyLoad", function(a) {
					return a.load("ngMask");
				}]
			}
		});

		/// charts - sparklines
		$routeProvider.when("/charts/sparklines", {
			templateUrl: "views/charts/sparklines.html",
			resolve: {
				deps: ["$ocLazyLoad", function(a) {
					return a.load(jqload.sparkline)
					.then(function() {
						return a.load({
							name: "app.directives",
							files: ["scripts/lazyload/directives/sparkline.directive.js"]
						})
					})
				}]
			}
		});

		/// charts - c3
		$routeProvider.when("/charts/c3", {
			templateUrl: "views/charts/c3.html", 
			resolve: {
				deps: ["$ocLazyLoad", "$rootScope", "$timeout", function(a, $rootScope, $timeout) {
					return a.load(jqload.c3)
					.then(function() {
						return a.load("angular-c3");
					})
					.then(function() {
						return a.load({
							name: "app.ctrls",
							files: ["scripts/lazyload/controllers/c3ChartCtrl.js"]
						})
					})
					.then(function() {
						return a.load("easypiechart");
					})
					.then(function() {
						$timeout(function() {
							$rootScope.$broadcast("c3.resize");
						}, 100);
					})

				}]
			}
		});


		/// Google Map
		$routeProvider.when("/maps/google-map", {
			templateUrl: "views/maps/google-map.html",
			resolve: {
				deps: ["$ocLazyLoad", function(a) {
					return a.load("ngMap");
				
				}]
			}
		});

		$routeProvider.when("/contactos", {
			templateUrl: "views/contactos/principal.html",
			controller: "ContactosController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
				 	return a.load(["ui.select", "ngTagsInput", "colorpicker.module", "ui.slider"])
					.then(function(){
                    return a.load({
                        name: 'app.contactos',
                        files: ['scripts/lazyload/controllers/contactos.js']
                    })
                })
                }]
			}
		});
		// $routeProvider.when("/propiedades/registro", {
		// 	templateUrl: "views/propiedades/registro.html",
		// 	controller: "PropiedadesController",
		// 	resolve: {
		// 		 deps: ["$ocLazyLoad", function(a) {
  //                   return a.load({
  //                       name: 'app.propiedades',
  //                       files: ['scripts/lazyload/controllers/propiedades.js']
  //                   })
  //               }]
		// 	}
		// });
		
		// reporte usuarios
		// 	$routeProvider.when("/reportes/usuarios", {
		// 	templateUrl: "views/reportes/usuarios.html",
		// 	controller: "UsuariosController",
		// 	resolve: {
		// 		 deps: ["$ocLazyLoad", function(a) {
  //                   return a.load({
  //                       name: 'app.usuarios',
  //                       files: ['scripts/lazyload/controllers/usuarios.js']
  //                   })
  //               }]
		// 	}
		// });

		$routeProvider.when("/roles/usuarios", {
			templateUrl: "views/usuarios/roles_usuarios.html",
			controller:"RolesusuariosController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                        name: 'app.rolesusuarios',
                        files: ['scripts/lazyload/controllers/rolesusuarios.js']
                    })
                }]
			}
		});
		// fin

		//reporte contactos
			$routeProvider.when("/reportes/contactos", {
			templateUrl: "views/reportes/contactos.html",
			controller: "ContactosController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                        name: 'app.contactos',
                        files: ['scripts/lazyload/controllers/contactos.js']
                    })
                }]
			}
		});
		// fin




		$routeProvider.when("/propiedades/registro", {
			templateUrl: "views/propiedades/registro.html",
			controller:"PropiedadesController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
					return a.load(["ui.select", "ngTagsInput", "colorpicker.module", "ui.slider"])
					.then(function(){
						return a.load({
							name: 'app.propiedades',
							files: ['scripts/lazyload/controllers/propiedades.js']
						})
					})
                }]
			}
		});

		$routeProvider.when("/propiedades/asignacion", {
			templateUrl: "views/asignaciones/principal.html",
			controller: "AsignacionController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
					return a.load(["ui.select", "ngTagsInput", "colorpicker.module", "ui.slider"])
					.then(function(){
						return a.load({
							name: 'app.asignacion',
							files: ['scripts/lazyload/controllers/asignacion.js']
						})
					})
                }]
			}
		});

		$routeProvider.when("/reportes/propiedades", {
			templateUrl: "views/reportes/reporte-propiedades.html",
			controller:"ReportePropiedadesController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                        name: 'app.reportepropiedades',
                        files: ['scripts/lazyload/controllers/reportepropiedades.js']
                    })
                }]
			}
		});

		$routeProvider.when("/reportes/metas", {
			templateUrl: "views/reportes/metas.html",
			controller:"ReporteMetasController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                        name: 'app.reportemetas',
                        files: ['scripts/lazyload/controllers/reportemetas.js']
                    })
                }]
			}
		});

		$routeProvider.when("/reportes/ventas", {
			templateUrl: "views/reportes/ventas.html",
			controller:"ReporteVentasController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                        name: 'app.reporteventas',
                        files: ['scripts/lazyload/controllers/reporteventas.js']
                    })
                }]
			}
		});

		$routeProvider.when("/propiedades/lista-propiedades", {
			templateUrl: "views/propiedades/lista.html",
			controller:"Lista_PropiedadesController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                        name: 'app.lista_propiedades',
                        files: ['scripts/lazyload/controllers/lista_propiedades.js']
                    })
                }]
			}
		});


		$routeProvider.when("/reportes/proyectos", {
			templateUrl: "views/proyectos/registrop.html",
			controller:"RegistroproController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                        name: 'app.registropro',
                        files: ['scripts/lazyload/controllers/registropro.js']
                    })
                }]
			}
		});


		//ventas inicio
		$routeProvider.when("/propiedades/ventas", {
			templateUrl: "views/propiedades/ventas.html",
			controller:"VentasController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                        name: 'app.ventas',
                        files: ['scripts/lazyload/controllers/ventas.js']
                    })
                }]
			}
		});
		//ventas final

		$routeProvider.when("/usuarios", {
			templateUrl: "views/usuarios/principal.html",
			controller:"UsuariosController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                        name: 'app.usuarios',
                        files: ['scripts/lazyload/controllers/usuarios.js']
                    })
                }]
			}
		});

		$routeProvider.when("/pedidos", {
			templateUrl: "views/pedidos/principal.html",
			controller:"PedidosController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                        name: 'app.pedidos',
                        files: ['scripts/lazyload/controllers/pedidos.js']
                    })
                }]
			}
		});

		$routeProvider.when("/supervisores", {
			templateUrl: "views/supervisores/principal.html",
			controller:"SupervisoresController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                        name: 'app.supervisores',
                        files: ['scripts/lazyload/controllers/supervisores.js']
                    })
                }]
			}
		});


		$routeProvider.when("/sectoristas", {
			templateUrl: "views/sectoristas/principal.html",
			controller:"SectoristasController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                        name: 'app.sectoristas',
                        files: ['scripts/lazyload/controllers/sectoristas.js']
                    })
                }]
			}
		});

		$routeProvider.when("/sectores", {
			templateUrl: "views/sectores/principal.html",
			controller:"SectoresController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                        name: 'app.sectores',
                        files: ['scripts/lazyload/controllers/sectores.js']
                    })
                }]
			}
		});

		$routeProvider.when("/tipovoceadores", {
			templateUrl: "views/tipovoceadores/principal.html",
			controller:"TipoVoceadoresController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                        name: 'app.tipovoceadores',
                        files: ['scripts/lazyload/controllers/tipovoceadores.js']
                    })
                }]
			}
		});
// Mantenimientos

		$routeProvider.when("/voceadores", {
			templateUrl: "views/voceadores/principal.html",
			controller: "VoceadoresController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                        name: 'app.voceadores',
                        files: ['scripts/lazyload/controllers/voceadores.js']
                    })
                }]
			}
		});

		$routeProvider.when("/reportes/visitas", {
			templateUrl: "views/reportes/visitas.html",
			controller: "VisitasController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                        name: 'app.visitas',
                        files: ['scripts/lazyload/controllers/visitas.js']
                    })
                }]
			}
		});

		$routeProvider.when("/reportes/pedidos", {
			templateUrl: "views/reportes/pedidos.html",
			controller: "PedidosController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                        name: 'app.pedidos',
                        files: ['scripts/lazyload/controllers/pedidos.js']
                    })
                }]
			}
		});

		$routeProvider.when("/reportes/adicionales", {
			templateUrl: "views/reportes/adicionales.html",
			controller: "AdicionalesController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                        name: 'app.adicionales',
                        files: ['scripts/lazyload/controllers/adicionales.js']
                    })
                }]
			}
		});
		

		$routeProvider.when("/mantenimientos/contactos/estado_civil", {
			templateUrl: "views/mantenimientos/estadocivil.html",
			controller: "EstadocivilController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                        name: 'app.Estadocivil',
                        files: ['scripts/lazyload/controllers/estadocivil.js']
                    })
                }]
			}
		});

		$routeProvider.when("/mantenimientos/contactos/origen_clientes", {
			templateUrl: "views/mantenimientos/origenclientes.html",
			controller: "OrigenclientesController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                        name: 'app.origenclientes',
                        files: ['scripts/lazyload/controllers/origenclientes.js']
                    })
                }]
			}
		});
// FIN
		$routeProvider.when("/subsectores", {
			templateUrl: "views/subsectores/principal.html",
			controller: "SubsectoresController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                    	name: 'app.subsectores',
                        files: ['scripts/lazyload/controllers/subsectores.js']
                    })
                }]
			}
		});
	

		$routeProvider.when("/mantenimiento/inmuebles", {
			templateUrl: "views/inmuebles/nuevo_inmueble.html",
			controller: "InmueblesController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                    	name: 'app.inmuebles',
                        files: ['scripts/lazyload/controllers/inmuebles.js']
                    })
                }]
			}
		});

		$routeProvider.when("/mantenimiento/fincas", {
			templateUrl: "views/fincas/principal.html",
			controller: "FincasController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                    	name: 'app.fincas',
                        files: ['scripts/lazyload/controllers/fincas.js']
                    })
                }]
			}
		});

		$routeProvider.when("/mantenimiento/equipos", {
			templateUrl: "views/equipos/principal.html",
			controller: "EquiposController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                    	name: 'app.equipos',
                        files: ['scripts/lazyload/controllers/equipos.js']
                    })
                }]
			}
		});

		$routeProvider.when("/mantenimiento/mercados", {
			templateUrl: "views/mercados/nuevo.html",
			controller: "MercadosController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                    	name: 'app.mercados',
                        files: ['scripts/lazyload/controllers/mercados.js']
                    })
                }]
			}
		});

		$routeProvider.when("/mantenimiento/antiguedad", {
			templateUrl: "views/antiguedad/nuevo.html",
			controller: "AntiguedadController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                    	name: 'app.antiguedad',
                        files: ['scripts/lazyload/controllers/antiguedad.js']
                    })
                }]
			}
		});

		$routeProvider.when("/mantenimiento/zonas", {
			templateUrl: "views/zonas/nuevo.html",
			controller: "ZonasController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                    	name: 'app.zonas',
                        files: ['scripts/lazyload/controllers/zonas.js']
                    })
                }]
			}
		});

		$routeProvider.when("/mantenimiento/bancos", {
			templateUrl: "views/bancos/nuevo.html",
			controller: "BancosController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                    	name: 'app.bancos',
                        files: ['scripts/lazyload/controllers/bancos.js']
                    })
                }]
			}
		});

		$routeProvider.when("/mantenimiento/personas", {
			templateUrl: "views/personas/nuevo.html",
			controller: "PersonasController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                    	name: 'app.personas',
                        files: ['scripts/lazyload/controllers/personas.js']
                    })
                }]
			}
		});

		$routeProvider.when("/mantenimiento/construccion", {
			templateUrl: "views/construccion/nuevo.html",
			controller: "ConstruccionesController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                    	name: 'app.construcciones',
                        files: ['scripts/lazyload/controllers/construcciones.js']
                    })
                }]
			}
		});

		$routeProvider.when("/mantenimiento/mantenimiento", {
			templateUrl: "views/mantenimiento/nuevo.html",
			controller: "MantenimientosController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                    	name: 'app.mantenimientos',
                        files: ['scripts/lazyload/controllers/mantenimientos.js']
                    })
                }]
			}
		});

		$routeProvider.when("/mantenimiento/propietarios", {
			templateUrl: "views/propietarios/principal.html",
			controller: "PropietariosController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                    	name: 'app.propietarios',
                        files: ['scripts/lazyload/controllers/propietarios.js']
                    })
                }]
			}
		});

		$routeProvider.when("/propiedades/municipio", {
			templateUrl: "views/municipios/principal.html",
			controller: "MunicipioController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                    	name: 'app.municipio',
                        files: ['scripts/lazyload/controllers/municipio.js']
                    })
                }]
			}
		});

		$routeProvider.when("/propiedades/departamentos", {
			templateUrl: "views/departamentos/principal.html",
			controller: "DepartamentoController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                    	name: 'app.departamento',
                        files: ['scripts/lazyload/controllers/departamento.js']
                    })
                }]
			}
		});

		$routeProvider.when("/propiedades/paiz", {
			templateUrl: "views/paises/nuevo.html",
			controller: "PaisesController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                    	name: 'app.paises',
                        files: ['scripts/lazyload/controllers/paises.js']
                    })
                }]
			}
		});

		$routeProvider.when("/mantenimiento/ambiente", {
			templateUrl: "views/ambiente_propiedad/principal.html",
			controller: "AmbienteController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                    	name: 'app.ambiente',
                        files: ['scripts/lazyload/controllers/ambiente.js']
                    })
                }]
			}
		});

		$routeProvider.when("/informacion", {
			templateUrl: "views/informacion.html",
			controller: "InformacionController",
			resolve: {
				 deps: ["$ocLazyLoad", function(a) {
                    return a.load({
                        name: 'app.informacion',
                        files: ['scripts/lazyload/controllers/informacion.js']
                    })
                }]
			}
		});


	}])


	

}())


