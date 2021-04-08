<?php

namespace App\Controller;

use Rompetomp\InertiaBundle\Service\InertiaInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController
{
    /**
     * @Route("/home", name="home")
     */
    public function home(InertiaInterface $inertia): Response
    {
        return $inertia->render('Home', ['prop' => 'propValue']);
    }

    /**
     * @Route("/dashboard", name="dashboard")
     */
    public function dashboard(InertiaInterface $inertia): Response
    {
        return $inertia->render('Dashboard', ['prop' => '22']);
    }

    /**
     * @Route("/detail", name="detail")
     */
    public function detail(InertiaInterface $inertia): Response
    {
        return $inertia->render('Detail', ['prop' => '22']);
    }
}
