
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
  groomPhoto: "https://picsum.photos/300/300?random=1",
  bridePhoto: "https://picsum.photos/300/300?random=2",
  couplePhoto: "https://picsum.photos/800/600?random=3",
  weddingDate: "2025-12-29",
  weddingTime: "16:00",
  locationName: "Trung tâm Tiệc cưới Trống Đồng",
  locationAddress: "123 Đường Láng, Đống Đa, Hà Nội",
  groomFather: "Phạm Tiến Tôn",
  groomMother: "Đỗ Thị Hồng",
  brideFather: "",
  brideMother: "Đinh Thị Chuẩn",
  invitationMessage: "Hân hạnh báo tin vui và kính mời quý khách đến dự lễ thành hôn của chúng tôi.",
  galleryImages: [
    "/images/gallery1.svg",
    "/images/gallery2.svg",
    "/images/gallery3.svg",
    "/images/gallery4.svg",
  ],
  weddingSchedule: [
    { time: "17:30", activity: "Đón khách" },
    { time: "18:30", activity: "Làm lễ thành hôn" },
    { time: "19:15", activity: "Khai tiệc" },
    { time: "20:30", activity: "Chụp ảnh lưu niệm" }
  ],
  musicUrl: "/audio/music.mp3" // Local placeholder
};
