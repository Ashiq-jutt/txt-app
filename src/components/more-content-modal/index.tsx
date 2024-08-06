import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";
import { AppColors } from "~utils";
import styles from "./styles";

interface MoreContentModalProps {
  isVisible: boolean;
  left?: number;
  right?: number;
  top?: number;
  onClose: () => void;
  data: { text: string; icon: React.ReactNode }[];
}

const MoreContentModal: React.FC<MoreContentModalProps> = ({
  isVisible,
  left,
  right,
  top=15,
  onClose,
  data,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      backdropColor={AppColors.transparent}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      animationIn={"fadeIn"}
      animationOut={"fadeOut"}
    >
      <View style={[styles.container, { left, right, top }]}>
        {data.map((item, index) => (
          <React.Fragment key={index}>
            <View style={styles.iconTextContainer}>
              <Text style={styles.text}>{item.text}</Text>
              <TouchableOpacity activeOpacity={0.7} onPress={onClose}>
                {item.icon}
              </TouchableOpacity>
            </View>
            {index < data.length - 1 && <View style={styles.line} />}
          </React.Fragment>
        ))}
      </View>
    </Modal>
  );
};

export default MoreContentModal;



// import React from "react";
// import { Text, TouchableOpacity, View } from "react-native";
// import Modal from "react-native-modal";
// import { Archive, CopyIcon, DeleteIcon, SwitchOn } from "~assets/SVG";
// import { AppColors } from "~utils";
// import styles from "./styles";

// interface MoreContentModalProps {
//   isVisible: boolean;
//   right?: number;
//   top?: number;
//   left?: number;
//   onClose: () => void;
//   data: { text: string; icon: string }[];
// }

// const MoreContentModal: React.FC<MoreContentModalProps> = ({
//   isVisible,
//   onClose,
//   right,
//   top,
//   left,
//   data,
// }) => {
//   return (
//     <Modal
//       isVisible={isVisible}
//       backdropColor={AppColors.transparent}
//       onBackdropPress={() => onClose()}
//       onBackButtonPress={() => onClose()}
//       animationIn={"fadeIn"}
//       animationOut={"fadeOut"}
//     >
//       <View
//         style={[
//           styles.container,
//           { right: right ? right : left, top: top ? top : 15 },
//         ]}
//       >
//         <View style={styles.iconTextContainer}>
//           <Text style={styles.text}>{"Copy Number"}</Text>
//           <TouchableOpacity
//             activeOpacity={0.7}
//             onPress={() => {
//               onClose();
//             }}
//           >
//             <CopyIcon />
//           </TouchableOpacity>
//         </View>

//         <View style={styles.line} />
//         <View style={styles.iconTextContainer}>
//           <Text style={styles.text}>{"Archive"}</Text>
//           <TouchableOpacity
//             activeOpacity={0.7}
//             onPress={() => {
//               onClose();
//             }}
//           >
//             <Archive />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.line} />
//         <View style={styles.iconTextContainer}>
//           <Text style={styles.text}>{"Chatbot"}</Text>
//           <TouchableOpacity
//             activeOpacity={0.7}
//             onPress={() => {
//               onClose();
//             }}
//           >
//             <SwitchOn />
//           </TouchableOpacity>
//         </View>
//         <View style={styles.line} />
//         <View style={styles.iconTextContainer}>
//           <Text style={styles.text}>{"Delete all contacts"}</Text>
//           <TouchableOpacity
//             activeOpacity={0.7}
//             onPress={() => {
//               onClose();
//             }}
//           >
//             <DeleteIcon />
//           </TouchableOpacity>
//         </View>
//       </View>
//     </Modal>
//   );
// };

// export default MoreContentModal;
