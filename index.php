<?php

$request = $_SERVER['REQUEST_URI'];
$location = strrchr($request, '/');
$viewDir = '/views/';
error_log($location);

switch ($location) {
    case '':
    case '/':
        require __DIR__ . $viewDir . 'home.php';
        break;

    case '/about':
        require __DIR__ . $viewDir . 'about.php';
        break;

    case '/contact':
        require __DIR__ . $viewDir . 'contact.php';
        break;

	case '/features':
		require __DIR__ . $viewDir . 'features.php';
		break;
	
	case '/programs':
		require __DIR__ . $viewDir . 'programs.php';
		break;

    case '/speaking':
        require __DIR__ . $viewDir . 'speaking.php';
        break;

	case '/vision-board':
		require __DIR__ . $viewDir . 'vision-board-event.php';
		break;
    
    case '/intentional-2026':
		require __DIR__ . $viewDir . 'intentional-2026-event.php';
		break;
	
    default:
        http_response_code(404);
        require __DIR__ . $viewDir . '404.php';
}

?>