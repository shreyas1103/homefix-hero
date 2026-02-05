import { Camera, X, Image } from "lucide-react";
import { useState } from "react";

interface PhotoUploadProps {
  photos: string[];
  onPhotosChange: (photos: string[]) => void;
  maxPhotos?: number;
}

const PhotoUpload = ({ photos, onPhotosChange, maxPhotos = 3 }: PhotoUploadProps) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    // Convert files to data URLs for preview
    Array.from(files).forEach((file) => {
      if (photos.length >= maxPhotos) return;
      
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result as string;
        if (result && photos.length < maxPhotos) {
          onPhotosChange([...photos, result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const removePhoto = (index: number) => {
    onPhotosChange(photos.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Camera className="w-5 h-5 text-primary" />
        <h4 className="font-medium text-foreground">Upload Photos (Optional)</h4>
      </div>
      <p className="text-sm text-muted-foreground">
        Add photos of the issue for better service
      </p>

      <div className="grid grid-cols-3 gap-3">
        {/* Uploaded photos */}
        {photos.map((photo, index) => (
          <div key={index} className="relative aspect-square rounded-xl overflow-hidden bg-muted">
            <img src={photo} alt={`Issue ${index + 1}`} className="w-full h-full object-cover" />
            <button
              onClick={() => removePhoto(index)}
              className="absolute top-1 right-1 w-6 h-6 rounded-full bg-destructive text-destructive-foreground flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}

        {/* Upload button */}
        {photos.length < maxPhotos && (
          <label className="photo-upload-btn aspect-square cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <Image className="w-6 h-6 text-muted-foreground" />
            <span className="text-xs text-muted-foreground">Add Photo</span>
          </label>
        )}
      </div>

      {photos.length > 0 && (
        <p className="text-xs text-muted-foreground">
          {photos.length}/{maxPhotos} photos uploaded
        </p>
      )}
    </div>
  );
};

export default PhotoUpload;
