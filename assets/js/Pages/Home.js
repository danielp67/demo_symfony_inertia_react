import React, {Component, Fragment} from 'react';
import {InertiaLink} from "@inertiajs/inertia-react";

export default function Home(){
    return (
        <Fragment>
        <div className="text-white">Home page !</div>
            <InertiaLink  className="btn btn-primary" href="/dashboard">Aller au Dashboard</InertiaLink >
            <InertiaLink  className="btn btn-success" href="/detail">Aller au detail</InertiaLink >
        </Fragment>
)
}
