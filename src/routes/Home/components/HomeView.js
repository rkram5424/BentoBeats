import React from 'react'
import SplitterLayout from 'react-splitter-layout';

export const HomeView = () => (
  <SplitterLayout>
  <SplitterLayout vertical='true'>
    <div>Pattern</div>
    <div>Instrument</div>
  </SplitterLayout>
  <SplitterLayout vertical='true'>
    <div>Pianoroll</div>
    <div>Mixer</div>
  </SplitterLayout>
  </SplitterLayout>
)

export default HomeView
