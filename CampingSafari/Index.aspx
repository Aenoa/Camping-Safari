<%--<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Index.aspx.cs" Inherits="CampingSafari.WebForm1" %>--%>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>CAMPING SAFARI</title>

    <link rel="shortcut icon" href="IMAGES/logo/iconLion.png"/>
    <link rel="icon" href="IMAGES/logo/iconLion.png"/>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"/>


    <meta name="description" content=""/>
	<meta name="viewport" content="width=device-width, initial-scale=1"/>
	
    <!-- Owl Carousel 
    <link href="CSS/owl.carousel.css" rel="stylesheet" />
    <link href="CSS/owl.theme.css" rel="stylesheet" />
    <link href="CSS/owl.transitions.css" rel="stylesheet" />
    <script src="JS/Directive/wrapOwlcarousel.js"></script>
    <script src="JS/OwlCarousel/owl.carousel.js"></script>
    <script src="JS/OwlCarousel/owl.carousel.min.js"></script>-->
    
    <link rel="stylesheet" href="CSS/owl.carousel.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/owl-carousel/1.3.3/owl.transitions.min.css" />
    <script data-require="angular.js@1.3.x" src="https://code.angularjs.org/1.3.15/angular.js" data-semver="1.3.15"></script>
    <script data-require="jquery@2.1.3" data-semver="2.1.3" src="http://code.jquery.com/jquery-2.1.3.min.js"></script>
    <script src="JS/OwlCarousel/owl.carousel.js"></script>
    <!-- CSS-->
    <!-- bootstrap.min css -->
	<link rel="stylesheet" href="CSS/bootstrap.min.css"/>
    <!-- Font-awesome.min css -->
	<link rel="stylesheet" href="CSS/font-awesome.min.css"/>
    <!-- Main Stylesheet -->
    <link rel="stylesheet" href="CSS/animate.min.css"/>

	<link rel="stylesheet" href="CSS/main.css"/>
    <!-- Responsive Stylesheet -->
	<link rel="stylesheet" href="CSS/responsive.css"/>
	<!-- Js -->
    <script src="JS/JQuery/vendor/modernizr-2.6.2.min.js"></script>
    <!-- <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> -->
    <script>window.jQuery || document.write('<script src="JS/JQuery/vendor/jquery-1.10.2.min.js"><\/script>')</script>
    <script src="JS/JQuery/jquery.nav.js"></script>
    <script src="JS/JQuery/jquery.sticky.js"></script>
    <script src="JS/JQuery/bootstrap.min.js"></script>
    <script src="JS/JQuery/plugins.js"></script>
    <script src="JS/JQuery/wow.min.js"></script>
    <script src="JS/JQuery/main.js"></script>
    
</head>
    
<body >
    

    <!-- header-img start -->
    <section id="hero-area">
        <img class="img-responsive" src="IMAGES/font/fonthautnew.jpg"alt="" />
    </section>
    <div ng-app="CampingSafari" class="container" ng-controller="indexCtrl">
        <nav id="navigation">
            <div class="container-fluid" id="menu">
                <div class="row">
                    <div class="col-md-12">
                        <div class="block">
                            <nav class="navbar navbar-default">
                                <div class="container-fluid">
                                    <!-- Brand and toggle get grouped for better mobile display -->
                                    <div class="navbar-header">
                                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                            <span class="sr-only">Toggle navigation</span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                        </button>
                                        <!-- Logo of toolbar-->
                                        <a class="navbar-brand" href="#/">
                                            <img src="IMAGES/logo/logotransppt.png" alt="Logo" />
                                        </a>
                                    </div>
                                    <!-- Collect the nav links, forms, and other content for toggling -->
                                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1" >
                                        <ul class="nav navbar-nav navbar-right" id="menu">
                                            <li>
                                                <a id="accommodation" href="#/accommodation">Réservation</a>
                                                <ul>
                                                    <li><a href="" scroll-to="attempted">Tentes</a></li>
                                                    <li><a href="" scroll-to="chalet">Chalet</a></li>
                                                    <li><a href="" scroll-to="hilltop_cottage">Chalets Perchés</a></li>
                                                    <li><a href="" scroll-to="location">Emplacement</a></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a id="service" href="#/service" >Service</a>
                                                <ul>
                                                    
                                                    <li><a href="" scroll-to="pool">Piscine</a></li>
                                                    <li><a href="" scroll-to="event">Événements</a></li>
                                                    <li><a href="" scroll-to="slider">Bien être</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#/tourism">Tourisme</a></li>
                                            <li>
                                                <a href="#/practicalinfo">Info Pratique</a>
                                                <ul>
                                                    <li><a href="" scroll-to="plan">Plan</a></li>
                                                    <li><a href="" scroll-to="calendar">Calendrier</a></li>
                                                    <li><a href="" scroll-to="address">Adresse</a></li>
                                                    <li><a href="" scroll-to="contact-us">Contact</a></li>
                                                </ul>
                                            </li>

                                            <li ng-show ="user.Level == 2 || user.Level == 3">  
                                                <a>Gestion</a>
                                                <ul>
                                                    <li ng-show ="user.Level == 3"><a href="#/employe_management" scroll-to="employe_management">Gestion Employé</a></li>
                                                    <li ><a href="#/reservation_management" scroll-to="booking">Gestion Réservation</a></li>
                                                    <li ><a href="#/emplacement_management" scroll-to="location">Gestion Emplacement</a></li>
                                                </ul>
                                            </li>

                                            <li ng-show ="user.Level != -1">  
                                                <a>Profil</a>
                                                <ul>
                                                    <li><a href="#/profil">Mon Profil</a></li>
                                                    <li><a href="#/" ng-click="deconnexion()">Deconnexion</a></li>
                                                </ul>
                                            </li>
                                            <li ng-show ="user.Level == -1"><a href="#/connexion">Connexion</a></li>
                                        </ul>
                                    </div><!-- /.navbar-collapse -->
                                </div><!-- /.container-fluid -->
                            </nav>
                        </div>
                    </div><!-- .col-md-12 close -->
                </div><!-- .row close -->
            </div><!-- .container close -->
        </nav><!-- header close -->

        <div ng-view>

        </div>    
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js" defer></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.0-beta.1/angular-route.min.js" defer></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.7/angular-animate.min.js" defer></script>
    <script src="https://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.14.3.min.js" defer></script>
    <script src="JS/Core.js"></script>
    <script src="JS/Routes.js"></script>
    
    <script src="JS/Directive/scrollTo.js"></script>
    <script src="JS/PurJS/menuFixe.js"></script>
    <script src="JS/Controller/carousel.js"></script>
    <script src="JS/Directive/carouselTo.js"></script>
    <script src="JS/Controller/calendar.js"></script>
    <script src="JS/Controller/userControler.js"></script>
    <script src="JS/Factory/userFactory.js"></script>
    <script type="text/javascript" src="JS/PurJS/menuGestion.js"></script>
    <script src="JS/Service/connexionService.js"></script>
    <script src="JS/Factory/campsiteFactory.js"></script>
    <script src="JS/Controller/campsiteController.js"></script>
    <!-- <script type="text/javascript" src="JS/JQuery/jquery-1.11.2.js"></script>
    <script type="text/javascript" src="JS/JQuery/jquery-1.11.1.min.js"></script>-->
    <script src="JS/Factory/connexionFactory.js"></script>
    <script src="JS/Service/connexionService.js"></script>
    <script src="JS/Controller/pdfControler.js"></script>
    <script src="JS/Controller/accommodationController.js"></script>
    <script src="JS/Controller/indexController.js"></script>
    <script src="JS/Controller/connexion.js"></script>
    <script src="JS/Controller/calculetteController.js"></script>
    <script src="JS/Directive/scrollTo.js"></script>
    <script src="JS/Factory/reservationFactory.js"></script>
    <script src="JS/Controller/reservationController.js"></script>
    <script src="JS/Controller/profilController.js"></script>
    </body>
</html>
