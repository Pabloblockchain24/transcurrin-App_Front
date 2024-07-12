import { Modal, View, Text, Pressable } from "react-native"

export const ModalCustom = ({modalVisible, newService, handleModal, confirmAddService}) => {
    
    return(
        <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={handleModal}
        >
          <View>
              <Text>Estas seguro que quieres AGREGAR {newService}?</Text>
              <Pressable onPress={confirmAddService}>
                  <Text>Ok</Text>
              </Pressable>
              <Pressable onPress={handleModal}>
                  <Text>Cancelar</Text>
              </Pressable>
          </View>
        </Modal>
    )

}