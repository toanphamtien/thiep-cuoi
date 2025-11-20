
export interface ScheduleItem {
  time: string;
  activity: string;
}

export interface WeddingData {
  groomName: string;
  brideName: string;
  groomPhoto: string;
  bridePhoto: string;
  couplePhoto: string; // Main large photo
  weddingDate: string;
  weddingTime: string;
  locationName: string;
  locationAddress: string;
  locationLink: string;
  groomFather: string;
  groomMother: string;
  brideFather: string;
  brideMother: string;
  invitationMessage: string;
  galleryImages: string[];
  weddingSchedule: ScheduleItem[];
  bankAccountGroom?: string;
  bankAccountBride?: string;
  musicUrl: string;
}

export const DEFAULT_WEDDING_DATA: WeddingData = {
  groomName: "Phạm Tiến Toản",
  brideName: "Phạm Thị Duyên",
  groomPhoto: "/images/groom.jpg",
  bridePhoto: "/images/bride.jpg",
  couplePhoto: "/images/couple.jpg",
  weddingDate: "2025-12-29",
  weddingTime: "16:00",
  locationName: "Tại tư gia nhà trai",
  locationAddress: "Thôn 3 Du Lễ, xã Nghi Dương, TP. Hải Phòng",
  locationLink: "https://maps.app.goo.gl/BWEW8TVFVpuMiARZ6",
  groomFather: "Phạm Tiến Tôn",
  groomMother: "Đỗ Thị Hồng",
  brideFather: "",
  brideMother: "Đinh Thị Chuẩn",
  invitationMessage: "Hân hạnh báo tin vui và kính mời quý khách đến dự buổi tiệc chung vui cùng gia đình chúng tôi.",
  galleryImages: [
    "/images/DSC03574.jpg",
    "/images/DSC03345.jpg",
    "/images/DSC03549.jpg",
    "/images/DSC03395.jpg",
    "/images/DSC03562.jpg",
    "/images/DSC03533.jpg",
    "/images/DSC03523.jpg",
  ],
  weddingSchedule: [
    { time: "13:00", activity: "Đón Dâu" },
    { time: "16:00", activity: "Làm lễ thành hôn" },
    { time: "16:15", activity: "Khai tiệc" },
  ],
  musicUrl: "/audio/music.mp3" 
};
