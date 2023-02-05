import { Modal, useMantineTheme } from '@mantine/core';

function ProfileModal({ modal, setModal }) {
    const theme = useMantineTheme();

    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            size='55%'
            opened={modal}
            onClose={() => setModal(false)}
        >
            <form className='info-form'>
                <h3>Your Info</h3>
                <div>
                    <input type="text" className='infoInput' name='firstName' placeholder='First Name' />
                    <input type="text" className='infoInput' name='lastName' placeholder='Last Name' />
                </div>
                <div>
                    <input type="text" className='infoInput' name='works' placeholder='Works at' />
                </div>
                <div>
                    <input type="text" className='infoInput' name='livesIn' placeholder='Lives in' />
                    <input type="text" className='infoInput' name='country' placeholder='Country' />
                </div>
                <div>
                    <input type="text" className='infoInput' name='relation' placeholder='RelationShip Status ' />
                </div>
                <div>
                    Profile Image
                    <input type="file" name='profileImage' />
                    Cover Image
                    <input type="file" name='coverImage' />
                </div>
                <button className='button infoButton'>Update</button>
            </form>
        </Modal>
    );
}

export default ProfileModal