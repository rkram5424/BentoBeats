import React from 'react'
import SplitterLayout from 'react-splitter-layout';

import Instrument from '../../Instrument/components/Instrument';
import Mixer from '../../Mixer/components/Mixer';
import Pianoroll from '../../Pianoroll/components/Pianoroll';
import Pattern from '../../Pattern/components/Pattern';

export const HomeView = () => (
  <SplitterLayout>
    <SplitterLayout vertical='true'>
      <Pattern />
      <Instrument />
    </SplitterLayout>
    <SplitterLayout vertical='true'>
      <Pianoroll />
      <Mixer />
    </SplitterLayout>
  </SplitterLayout>
)

export default HomeView
