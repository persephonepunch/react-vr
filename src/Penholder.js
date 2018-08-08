import React from 'react';
import { asset, View, Model, StyleSheet } from 'react-vr';

export default class Penholder extends React.Component {
  render() {
    return (
      <View>
        <Model 
          source={{
            obj: asset('/house/FULL_HOUSE_wip_06X.obj'),
            mtl: asset('/house/FULL_HOUSE_wip_06X.mtl')
          }}
          style={{
            transform: [
              {translate: [-4, 0.25, -7]},
              { scale: 0.0004 },
              { rotateX: -.6 }
            ]
          }} 
        />
        <Model 
          source={{
            obj: asset('/waterfall/model.obj'),
            mtl: asset('/waterfall/materials.mtl')
          }}
          style={{
            transform: [
              {translate: [-1, -1, -5]},
              { scale: 0.3 },
              { rotateX: -.6 }
            ]
          }} 
      
        />
      <Model 
        source={{
            obj: asset('/house/FULL_HOUSE_wip_06X.obj'),
            mtl: asset('/house/FULL_HOUSE_wip_06X.mtl')
        }}
        style={{
          transform: [
            {translate: [2, -1, -3.75]},
            { scale: 0.0015 },
           
           
          ]
        }} 
      />
      </View>
    );
  }
};

