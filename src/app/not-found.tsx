import NoMeeting from './(main)/meeting/components/NoMeeting';

export default function NotFound() {
  return (
    <div>
      <NoMeeting
        message={`[404] 페이지를 찾을 수 없습니다.
입력하신 주소를 다시 확인해 주세요.`}
      />
    </div>
  );
}
