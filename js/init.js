(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $(".preloadimage").css("opacity", 0);

  }); // end of document ready
})(jQuery); // end of jQuery name space

function init() {
  var scrollFlag = true;
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 200,
            fadeOn = 100,
            graphOn = 2248;
            // console.log(distanceY);
            // if (distanceY > 3200 || distanceY < 1400){
            //   scrollFlag = true;
            // }
            if(scrollFlag)
            {
              if (distanceY > graphOn){
                // console.log("creating chart");
                var polardata = [
                  {
                      value: 300,
                      color:"#f44336",
                      highlight: "#FF5A5E",
                      label: "Red"
                  },
                  {
                      value: 50,
                      color: "#46BFBD",
                      highlight: "#5AD3D1",
                      label: "Green"
                  },
                  {
                      value: 100,
                      color: "#03A9F4",
                      highlight: "#FFC870",
                      label: "Yellow"
                  },
                  {
                      value: 40,
                      color: "#949FB1",
                      highlight: "#A8B3C5",
                      label: "Grey"
                  },
                  {
                      value: 120,
                      color: "#4D5360",
                      highlight: "#616774",
                      label: "Dark Grey"
                  }

              ];

                var radardata = {
                    labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
                    datasets: [
                        {
                            label: "My First dataset",
                            fillColor: "rgba(229,57,53, 1)",
                            strokeColor: "rgba(220,220,220,1)",
                            pointColor: "rgba(220,220,220,1)",
                            pointStrokeColor: "#fff",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgba(220,220,220,1)",
                            data: [65, 59, 90, 81, 56, 55, 40]
                        },
                        {
                            label: "My Second dataset",
                            fillColor: "#03A9F4",
                            strokeColor: "rgba(151,187,205,1)",
                            pointColor: "rgba(151,187,205,1)",
                            pointStrokeColor: "#fff",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgba(151,187,205,1)",
                            data: [28, 48, 40, 19, 96, 27, 100]
                        }
                    ]
                };
                var bardata = {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [
                        {
                            label: "My First dataset",
                            fillColor: "rgba(229,57,53, 1)",
                            strokeColor: "rgba(220,220,220,0.8)",
                            highlightFill: "rgba(220,220,220,0.75)",
                            highlightStroke: "rgba(220,220,220,1)",
                            data: [65, 59, 80, 81, 56, 55, 40]
                        },
                        {
                            label: "My Second dataset",
                            fillColor: "#03A9F4",
                            strokeColor: "rgba(151,187,205,0.8)",
                            highlightFill: "rgba(151,187,205,0.75)",
                            highlightStroke: "rgba(151,187,205,1)",
                            data: [28, 48, 40, 19, 86, 27, 90]
                        }
                    ]
                };
                var linedata = {
                    labels: ["January", "February", "March", "April", "May", "June", "July"],
                    datasets: [
                        {
                            label: "My First dataset",
                            fillColor: "rgba(229,57,53, 1)",
                            strokeColor: "rgba(220,220,220,1)",
                            pointColor: "rgba(220,220,220,1)",
                            pointStrokeColor: "#fff",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgba(220,220,220,1)",
                            data: [65, 59, 80, 81, 56, 55, 40]
                        },
                        {
                            label: "My Second dataset",
                            fillColor: "#03A9F4",
                            strokeColor: "rgba(151,187,205,1)",
                            pointColor: "rgba(151,187,205,1)",
                            pointStrokeColor: "#fff",
                            pointHighlightFill: "#fff",
                            pointHighlightStroke: "rgba(151,187,205,1)",
                            data: [28, 48, 40, 19, 86, 27, 90]
                        }
                    ]
                };
                var context = document.getElementById('skills').getContext('2d');
                var skillsChart = new Chart(context).PolarArea(polardata);
                var context2 = document.getElementById('skills2').getContext('2d');
                var skills2Chart = new Chart(context2).Line(linedata);
                var context3 = document.getElementById('skills3').getContext('2d');
                var skills3Chart = new Chart(context3).Bar(bardata);
                var context4 = document.getElementById('skills4').getContext('2d');
                var skills4Chart = new Chart(context4).Radar(radardata);
                scrollFlag=false;
              }
            }
        if (distanceY > fadeOn) {
          $(".header").css("opacity", 1 + (.8 - distanceY/100 ));
        }
        else{
          $(".header").css("opacity", 1);
        }
        if (distanceY > shrinkOn) {
            $(".lifebar-container").addClass("smaller");
            $(".xp-text").text("+" + distanceY + " XP");
            $(".xp-text").css("opacity", distanceY / 1000 - .5);
            // console.log(distanceY/100);
            $(".lifebar-container.smaller .lifebar-bar").css("width", 40+ distanceY/4);
            // Get the context of the canvas element we want to select


        } else {
            if ($(".lifebar-container").hasClass("smaller")) {
                  $(".lifebar-container").removeClass("smaller");
            }
        }

    });
}
window.onload = init();
