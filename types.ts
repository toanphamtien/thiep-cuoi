
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
    "https://picsum.photos/400/600?random=10",
    "https://picsum.photos/400/600?random=11",
    "https://picsum.photos/400/600?random=12",
    "https://picsum.photos/400/600?random=13",
  ],
  weddingSchedule: [
    { time: "17:30", activity: "Đón khách" },
    { time: "18:30", activity: "Làm lễ thành hôn" },
    { time: "19:15", activity: "Khai tiệc" },
    { time: "20:30", activity: "Chụp ảnh lưu niệm" }
  ],
  musicUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Public domain placeholder
};
