import RoomLink from '@/components/threadLink'

export default async function Index() {

  return (
    <div className="flex-1 w-full flex flex-col items-center">
      <h1 className="text-3xl font-bold pt-6 pb-10">リアルタイムチャットルーム</h1>
      <ul>
        <RoomLink channelName='Room1' roomName='ルーム1'></RoomLink>
        <RoomLink channelName='Room2' roomName='ルーム2'></RoomLink>
        <RoomLink channelName='Room3' roomName='ルーム3'></RoomLink>
        <RoomLink channelName='Room4' roomName='ルーム4'></RoomLink>
        <RoomLink channelName='Room5' roomName='ルーム5'></RoomLink>
      </ul>
    </div>
  )
}
