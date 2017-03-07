<?php include('inc/html.inc.php'); ?>
<head>
    <?php include('inc/head.inc.php'); ?>
    <script src="https://unpkg.com/vue"></script>
</head>

<body>
    <div id="content">

        <?php include('inc/header.inc.php'); ?>
        
        <div id="page">
            <div id="app">
                {{ message }}
            </div>
            <div id="places">

            </div>

        </div><!-- #page -->
        
        <?php include('inc/footer.inc.php'); ?>
        
    </div><!-- #content -->
    
    <?php include('inc/scripts.inc.php'); ?>
</body>
</html>