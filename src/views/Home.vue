<template>
  <b-container class="mt-4">
    <b-row>
      <b-col>
        <b-jumbotron>
          <template slot="header">SmartSchedule</template>

          <template slot="lead">
            This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
            featured content or information.
          </template>

          <hr class="my-4">

          <p>
            It uses utility classes for typography and spacing to space content out within the larger
            container.
          </p>
          <b-button-group>
            <b-button variant="primary" href="#/login">Login</b-button>
            <b-button variant="success" href="#/register">Create account</b-button>
          </b-button-group>
        </b-jumbotron>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-jumbotron bg-variant="primary" text-variant="white">
          <template slot="lead">
            This is a simple hero unit, a simple jumbotron-style component for calling extra attention to
            featured content or information.
          </template>
        </b-jumbotron>
      </b-col>
    </b-row>
  </b-container>
</template>