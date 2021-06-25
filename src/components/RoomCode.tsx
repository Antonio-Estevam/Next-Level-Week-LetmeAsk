import copyImg from '../assets/images/copy.svg';

import '../styles/room-code.scss';

type RoomcodeProps ={
    code: string;
}

export function RoomCode(props: RoomcodeProps) {
    function copyRoomCodeClipboard(){
        navigator.clipboard.writeText(props.code);
    }
    return (
        <button className="room-code" onClick={copyRoomCodeClipboard}>
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            
            <span>Sala #-MctPCz3u8YGrL2KEhmX</span>
        </button>
    )
}