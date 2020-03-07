<!DOCTYPE html>
<html lang="ja">
<head>
    <?php __get_header(); ?>
</head>
<body class="<?php __get_body_class(); ?>">

    <!-- HTML-Parts -->
    <app-html>

        <!-- Main-Section -->
        <section class="section">
            
            <!-- Main-Container -->
            <div class="container mt-5">
                
                <!-- Row -->
                <div class="row">

                    <!-- Main-Column -->
                    <div 
                        class="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4"
                    >
                        <!-- Login-Brand -->
                        <?php __get_component("login-brand.php"); ?><!-- /Login-Brand -->

                        <!-- Card -->
                        <div class="card card-primary">
                            
                            <!-- Card-Header -->
                            <div class="card-header">

                                <!-- Card-Title -->
                                <h4>
                                    <?php __get_card_title(); ?>
                                </h4><!-- /Card-Title -->
                                
                            </div><!-- /Card-Header -->
                            
                            <!-- Card-Body -->
                            <div class="card-body">

                                <?php __get_template(); ?>
                            
                            </div><!-- /Card-Body -->

                        </div><!-- /Card -->

                        <!-- Footer -->
                        <?php __get_component("footer.php"); ?><!-- /Footer -->

                    </div><!-- /Main-Column -->

                </div><!-- /Row -->

            </div><!-- /Main-Container -->

        </section><!-- /Main-Section -->

    <!-- JS-Parts -->
    <app-js>
        <?php __get_footer(); ?>
    </app-js><!-- /JS-Parts -->

</body>
</html>