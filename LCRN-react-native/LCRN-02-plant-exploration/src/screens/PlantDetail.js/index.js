import React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';

import {icons, COLORS, FONTS, images, SIZES} from '../../constants';

const RequirementDetail = ({icon, label, detail}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={icon}
          resizeMode="cover"
          style={{
            tintColor: COLORS.secondary,
            width: 30,
            height: 30,
          }}
        />
        <Text
          style={{
            marginLeft: SIZES.base,
            color: COLORS.secondary,
            ...FONTS.h2,
          }}>
          {label}
        </Text>
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <Text
          style={{
            marginLeft: SIZES.base,
            color: COLORS.gray,
            ...FONTS.h2,
          }}>
          {detail}
        </Text>
      </View>
    </View>
  );
};
export const PlantDetail = ({navigation}) => {
  const renderHeader = () => {
    return (
      <View
        style={{
          position: 'absolute',
          top: 50,
          left: SIZES.padding,
          right: SIZES.padding,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
            }}>
            <TouchableOpacity
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                backgroundColor: 'rgba(255,255,255,0.5)',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => navigation.navigate('Home')}>
              <Image
                source={icons.back}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'center',
            }}
            onPress={() => console.log('Clicou')}>
            <Image
              source={icons.focus}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25,
              }}
            />
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', marginTop: '10%'}}>
          <View style={{flex: 1}}>
            <Text style={{color: COLORS.white, ...FONTS.largeTitle}}>
              Glory Mantas
            </Text>
          </View>
          <View style={{flex: 1}} />
        </View>
      </View>
    );
  };

  const RequirementBar = ({icon, barPercentage}) => {
    return (
      <View style={{height: 60, alignItems: 'center'}}>
        <View
          style={{
            height: 50,
            width: 50,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
            borderWidth: 1,
            borderColor: COLORS.gray,
          }}>
          <Image
            source={icon}
            resizeMode="cover"
            style={{tintColor: COLORS.secondary, width: 30, height: 30}}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: 3,
            marginTop: SIZES.base,
            backgroundColor: COLORS.gray,
          }}
        />
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: barPercentage,
            height: 3,
            marginTop: SIZES.base,
            backgroundColor: COLORS.primary,
          }}
        />
      </View>
    );
  };
  const renderRquirementsBar = () => {
    return (
      <View
        style={{
          flexDirection: 'row',
          margintTop: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          justifyContent: 'space-between',
        }}>
        <RequirementBar icon={icons.sun} barPercentage="50%" />
        <RequirementBar icon={icons.drop} barPercentage="25%" />
        <RequirementBar icon={icons.temperature} barPercentage="80%" />
        <RequirementBar icon={icons.garden} barPercentage="30%" />
        <RequirementBar icon={icons.seed} barPercentage="50%" />
      </View>
    );
  };

  const renderRequirements = () => {
    return (
      <View
        style={{
          flex: 2.5,
          margintTop: SIZES.padding,
          paddingHorizontal: SIZES.padding,
          justifyContent: 'space-around',
        }}>
        <RequirementDetail icon={icons.sun} label="Sunlight" detail="15ºC" />
        <RequirementDetail
          icon={icons.drop}
          label="Water"
          detail="250 ML Daily"
        />
        <RequirementDetail
          icon={icons.temperature}
          label="Room Temp"
          detail="25ºC"
        />
        <RequirementDetail icon={icons.garden} label="Soil" detail="3 Kg" />
        <RequirementDetail
          icon={icons.seed}
          label="Fertilizer"
          detail="150 Mg"
        />
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          paddingVertical: SIZES.padding,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            paddingHorizontal: SIZES.padding,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            backgroundColor: COLORS.primary,
          }}
          onPress={() => console.log('clicou')}>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h2,
            }}>
            Take Action
          </Text>
          <Image
            source={icons.chevron}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              marginLeft: SIZES.padding,
            }}
          />
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: SIZES.padding,
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            //backgroundColor: COLORS.secondary,
            paddingHorizontal: SIZES.padding,
          }}>
          <Text
            style={{
              flex: 1,
              color: COLORS.secondary,
              ...FONTS.h3,
            }}>
            Almost 2 weeks of growing time
          </Text>
          <Image
            source={icons.downArrow}
            resizeMode="contain"
            style={{
              width: 20,
              height: 20,
              marginLeft: SIZES.base,
              tintColor: COLORS.secondary,
            }}
          />
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{height: '35%'}}>
        <Image
          source={images.bannerBg}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </View>

      <View
        style={{
          flex: 1,
          marginTop: -40,
          backgroundColor: COLORS.lightGray,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          paddingVertical: SIZES.padding,
        }}>
        <Text
          style={{
            paddingHorizontal: SIZES.padding,
            color: COLORS.secondary,
            ...FONTS.h1,
          }}>
          Requirements
        </Text>

        {renderRquirementsBar()}

        {renderRequirements()}

        {renderFooter()}
      </View>

      {renderHeader()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
