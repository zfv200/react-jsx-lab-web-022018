import React from 'react';
import ReactDOM from 'react-dom';

import RegistrationForm from './components/RegistrationForm';
import Webpage from './components/Webpage';

// import { RegistrationForm } from './components/RegistrationForm'
// import { FillerText } from './components/FillerText'
// import { Webpage } from './components/webpage'

ReactDOM.render(
  (
    <div>
      <RegistrationForm />
      <Webpage />
    </div>
  ),
  document.getElementById('global')
);
