export interface MempelaiModel {
    mempelai_id: number,
    foto_profil?: File | undefined,
    jenis_kelamin: string,
    nama_lengkap: string,
    nama_panggilan: string,
    nama_ayah: string,
    nama_ibu: string,
    alamat?: string | undefined,
    link_instagram?: string | undefined,
    link_facebook?: string | undefined,
    link_twitter?: string | undefined,
    link_tiktok?: string | undefined,
}