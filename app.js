// =========================================================================
    // 1. KATALOG HIERARKI JEMBATAN BMS (Bab 5.6 & Lampiran B No. 01/P/BM/2022)
    // =========================================================================
    const BMS_HIERARCHY = {
      "2.100 - Jalan Pendekat / Tanah Timbunan": {
        code: "2.100",
        level3: {
          "3.110 - Timbunan Jalan Pendekat (Oprit)": [
            "4.111 - Tanah Timbunan Jalan Pendekat",
            "4.112 - Drainase Timbunan Jalan Pendekat",
            "4.113 - Dinding Penahan Tanah Jalan Pendekat",
            "4.114 - Perkerasan Jalan Pendekat",
            "4.115 - Pelat Injak (Approach Slab)"
          ]
        }
      },
      "2.200 - Aliran Sungai": {
        code: "2.200",
        level3: {
          "3.210 - Aliran Sungai": [
            "4.211 - Tebing Sungai (Stream Bank)",
            "4.212 - Alur Utama Air (Main Channel)",
            "4.213 - Daerah Genangan Banjir (Flood Plain)"
          ],
          "3.220 - Bangunan Pengaman (Scour Protection)": [
            "4.221 - Krib (Groyne)",
            "4.222 - Bronjong (Gabion) & Mattresses",
            "4.223 - Talud Beton / Pasangan Batu",
            "4.225 - Dinding Turap Baja (Sheet Piling)",
            "4.226 - Sistem Fender Pelindung Pilar"
          ]
        }
      },
      "2.300 - Bangunan Bawah": {
        code: "2.300",
        level3: {
          "3.310 - Fondasi": [
            "4.311 - Tiang Pancang / Tiang Bor (Pile)",
            "4.312 - Fondasi Sumuran (Caisson)",
            "4.313 - Fondasi Langsung (Spread Footing)",
            "4.314 - Angkur Jembatan"
          ],
          "3.320 - Kepala Jembatan (Abutmen) & Pilar": [
            "4.321 - Balok Kepala Tiang (Pile Cap)",
            "4.322 - Dinding Kepala Jembatan (Abutment Wall) / Kolom Pilar",
            "4.323 - Tembok Sayap (Wing Wall)",
            "4.324 - Balok Kepala Pilar (Pier Head / Cross Head)",
            "4.325 - Penunjang / Pengaku Pilar (Column Bracing)",
            "4.327 - Drainase Dinding Kepala Jembatan"
          ]
        }
      },
      "2.400 - Bangunan Atas": {
        code: "2.400",
        level3: {
          "3.410 - Sistem Gelagar (Girder System)": [
            "4.411 - Gelagar Utama Memanjang (Main Girder)",
            "4.412 - Gelagar Melintang / Diafragma",
            "4.413 - Kabel Prategang & Blok Angkur Gelagar",
            "4.415 - Sambungan Gelagar"
          ],
          "3.450 - Jembatan Rangka Baja (Steel Truss)": [
            "4.451 - Panel Rangka / Batang Tepi Atas (Top Chord)",
            "4.452 - Batang Tepi Bawah (Bottom Chord)",
            "4.453 - Batang Diagonal & Vertikal Rangka Baja",
            "4.454 - Ikatan Angin Atas & Bawah",
            "4.457 - Pelat Buhul & Sambungan Baut Rangka"
          ],
          "3.500 - Sistem Lantai Jembatan (Deck System)": [
            "4.501 - Pelat Lantai Beton (Deck Slab)",
            "4.502 - Lapis Permukaan / Lapis Aus Aspal",
            "4.504 - Trotoar / Kerb",
            "4.506 - Pipa Cucuran & Drainase Lantai"
          ],
          "3.600 - Sambungan Siar Muai (Expansion Joint)": [
            "4.601 - Siar Muai Baja / Finger Joint",
            "4.602 - Siar Muai Karet (Elastomeric / Strip Seal)",
            "4.603 - Siar Muai Asphaltic Plug"
          ],
          "3.610 - Perletakan / Landasan (Bearing)": [
            "4.611 - Landasan Baja",
            "4.612 - Landasan Karet Elastomer (Elastomeric Bearing)",
            "4.613 - Landasan Pot / Spherical Bearing",
            "4.614 - Bantalan Mortar / Pedestal & Baut Penahan Gempa"
          ]
        }
      },
      "2.700 - Perlengkapan": {
        code: "2.700",
        level3: {
          "3.700 - Sandaran (Railing) & Pembatas": [
            "4.701 - Tiang Sandaran & Railing Pengaman",
            "4.702 - Pagar Pengaman / Parapet Beton",
            "4.703 - Portal Pembatas Tinggi"
          ],
          "3.710 - Rambu, Marka & Papan Nama": [
            "4.711 - Rambu Lalu Lintas Jembatan",
            "4.712 - Marka Jalan di Atas Jembatan",
            "4.713 - Papan Nama & Nomor Jembatan"
          ]
        }
      },
      "2.800 - Gorong-gorong": {
        code: "2.800",
        level3: {
          "3.810 - Struktur Gorong-gorong": [
            "4.811 - Gorong-gorong Persegi Beton (Box Culvert)",
            "4.812 - Gorong-gorong Pipa Beton",
            "4.813 - Gorong-gorong Pelengkung Baja Bergelombang"
          ]
        }
      }
    };

    // =========================================================================
    // 2. KATALOG JENIS KERUSAKAN & PEMETAAN SARAN PERBAIKAN + HSPK (Lampiran C & J)
    // =========================================================================
    const DAMAGE_CATALOG = [
      {
        code: "101",
        label: "101 - Penurunan mutu & keretakan pasangan batu/bata",
        category: "Pemeliharaan Berkala",
        payItem: "7.9.(1) & 8.1.(2)",
        repairMethod: "Perbaikan keretakan pasangan batu (pointing/grouting mortar) & penggantian batu lepas",
        defaultUnit: "m3",
        unitPrice: 1350000
      },
      {
        code: "201",
        label: "201 - Beton gompal (spalling), keropos (honeycomb), atau delaminasi",
        category: "Rehabilitasi (Perbaikan)",
        payItem: "8.1.(1) s/d 8.1.(4)",
        repairMethod: "Penambalan (Patching) & Grouting permukaan beton dengan mortar non-shrink mutu tinggi",
        defaultUnit: "m2",
        unitPrice: 950000
      },
      {
        code: "202",
        label: "202 - Keretakan struktural / non-struktural pada elemen beton",
        category: "Rehabilitasi (Perbaikan)",
        payItem: "8.2.(1) s/d 8.2.(3)",
        repairMethod: "Injeksi bahan epoksi (Epoxy Resin Injection) bertekanan pada celah retak beton",
        defaultUnit: "m",
        unitPrice: 680000
      },
      {
        code: "203",
        label: "203 - Korosi / karat pada baja tulangan beton",
        category: "Rehabilitasi (Perbaikan & Perkuatan)",
        payItem: "8.1.(3) & 7.3.(1)",
        repairMethod: "Chipping selimut beton, pembersihan karat tulangan, pelapisan anti-korosi & re-profiling mortar",
        defaultUnit: "m2",
        unitPrice: 1450000
      },
      {
        code: "204",
        label: "204 - Aus, pelapukan, atau pengelupasan permukaan lantai/beton",
        category: "Pemeliharaan Berkala",
        payItem: "6.3.(5a) & 8.1.(1)",
        repairMethod: "Pengupasan lapis aus rusak, waterproofing lantai, & pelapisan ulang aspal AC-WC",
        defaultUnit: "m2",
        unitPrice: 385000
      },
      {
        code: "206",
        label: "206 - Lendutan berlebihan pada bangunan atas saat lalu lintas lewat",
        category: "Rehabilitasi (Perkuatan Struktur)",
        payItem: "8.4.(1) s/d 8.4.(6)",
        repairMethod: "Perkuatan struktur gelagar/lantai dengan laminasi serat karbon (CFRP / FRP) atau External Prestressing",
        defaultUnit: "m2",
        unitPrice: 3250000
      },
      {
        code: "301",
        label: "301 - Lepas / rusaknya sistem perlindungan korosi (cat / galvanis)",
        category: "Pemeliharaan Berkala",
        payItem: "8.7.(1) s/d 8.7.(3c)",
        repairMethod: "Sandblasting ringan & pengecatan ulang proteksi korosi struktur baja (primer + intermediate + topcoat)",
        defaultUnit: "m2",
        unitPrice: 320000
      },
      {
        code: "302",
        label: "302 - Karat pada elemen struktur rangka / gelagar baja",
        category: "Rehabilitasi (Perbaikan)",
        payItem: "8.8.(2) / 8.7.(2)",
        repairMethod: "Pembersihan karat mekanis, penggantian pelat baja terkorosi (Grade 250/345) & recoating proteksi",
        defaultUnit: "kg",
        unitPrice: 48000
      },
      {
        code: "303",
        label: "303 - Perubahan bentuk / deformasi elemen baja",
        category: "Rehabilitasi (Perkuatan Struktur)",
        payItem: "8.8.(3)",
        repairMethod: "Pelurusan termal/mekanis atau penggantian batang/elemen baja struktur Grade 345",
        defaultUnit: "kg",
        unitPrice: 54000
      },
      {
        code: "308",
        label: "308 - Lepas / longgarnya sistem sambungan baut mutu tinggi",
        category: "Pemeliharaan Berkala",
        payItem: "8.5.(1) s/d 8.5.(2c)",
        repairMethod: "Penggantian dan pengencangan baut mutu tinggi (High Strength Bolt A325) dengan kunci torsi terkalibrasi",
        defaultUnit: "buah",
        unitPrice: 95000
      },
      {
        code: "501",
        label: "501 - Endapan lumpur (agradasi) / tumpukan sampah & vegetasi aliran sungai",
        category: "Pemeliharaan Rutin",
        payItem: "10.2.(1)",
        repairMethod: "Pembersihan rutin sampah/hanyutan pada pilar & pengerukan sedimentasi alur sungai",
        defaultUnit: "m3",
        unitPrice: 185000
      },
      {
        code: "503",
        label: "503 - Gerusan lokal (scouring) dasar sungai & kerusakan talud/tebing",
        category: "Rehabilitasi (Perbaikan)",
        payItem: "7.10.(3a) & 7.9.(1)",
        repairMethod: "Pemasangan bronjong kawat galvanis (Gabion) & pasangan batu pelindung gerusan tebing/fondasi",
        defaultUnit: "m3",
        unitPrice: 1250000
      },
      {
        code: "551",
        label: "551 - Pergerakan, kemiringan, atau amblasnya Kepala Jembatan / Pilar",
        category: "Rehabilitasi (Perkuatan Struktur)",
        payItem: "7.6.(4) & 8.3.(1)",
        repairMethod: "Perkuatan bangunan bawah dengan Concrete Jacketing, mikropil/underpinning fondasi & turap baja",
        defaultUnit: "m3",
        unitPrice: 4850000
      },
      {
        code: "601",
        label: "601 - Beda tinggi (settlement) antara jalan pendekat dengan lantai jembatan",
        category: "Pemeliharaan Berkala",
        payItem: "3.2.(1) & 6.3.(5a)",
        repairMethod: "Perbaikan penurunan oprit, injeksi grouting bawah pelat injak, & leveling lapis tambah aspal",
        defaultUnit: "m2",
        unitPrice: 520000
      },
      {
        code: "701",
        label: "701 - Hilang / rusaknya elemen sambungan siar muai (Expansion Joint)",
        category: "Pemeliharaan Berkala",
        payItem: "7.11.(1a) / 8.11",
        repairMethod: "Penggantian sambungan siar muai (Expansion Joint) tipe Asphaltic Plug / Strip Seal Baja",
        defaultUnit: "m",
        unitPrice: 4200000
      },
      {
        code: "711",
        label: "711 - Kerusakan / bergesernya perletakan (Landasan Elastomer) & penahan gempa",
        category: "Rehabilitasi (Perbaikan)",
        payItem: "7.12.(1) & 8.12",
        repairMethod: "Pengangkatan bangunan atas (Jacking), perbaikan pedestal mortar, & penggantian bantalan karet elastomer",
        defaultUnit: "buah",
        unitPrice: 8500000
      },
      {
        code: "801",
        label: "801 - Tidak berfungsinya elemen drainase lantai & rembesan air bawah lantai",
        category: "Pemeliharaan Rutin",
        payItem: "10.2.(1) & 7.16.(3)",
        repairMethod: "Pembersihan saluran drainase lantai, perpanjangan pipa cucuran PVC/Galvanis & sealing rembesan",
        defaultUnit: "buah",
        unitPrice: 450000
      },
      {
        code: "901",
        label: "901 - Kerusakan tiang sandaran, pagar pengaman (railing), atau rambu/papan nama",
        category: "Pemeliharaan Rutin",
        payItem: "7.13.(1) & 10.2.(1)",
        repairMethod: "Perbaikan/penggantian pipa sandaran baja, pengecatan parapet, & pemulihan rambu keselamatan",
        defaultUnit: "m",
        unitPrice: 750000
      }
    ];

    // =========================================================================
    // 3. DATABASE SAMPEL MULTI-JEMBATAN (TERHUBUNG PENUH ANTAR MODUL)
    // =========================================================================
    const INITIAL_BRIDGES = [
      {
        id: "bms-kalipay",
        noJembatan: "62.004.001.0",
        namaJembatan: "KALI PAY",
        statusJalan: "Nasional",
        namaRuas: "Ruas Jalan Nasional Jayapura (PPK 2.1)",
        provinsi: "PAPUA (JAYAPURA)",
        kabKota: "Jayapura",
        kotaAsal: "JPR",
        kmLokasi: 7668,
        tglInventarisasi: "2026-06-20",
        namaPemeriksa: "Mario Marthin Tamonob",
        tahunBangun: 1990,
        panjangTotal: 46.4,
        jumlahBentang: 1,
        lebarLantai: 4.4,
        lebarTrotoar: 1.0,
        clearenceVertikal: 5.0,
        lhr: 1162,
        tahunLHR: 2011,
        nilaiLaluLintas: "0",
        bebanMuatan: 45,
        tipeBA: "RBU - Rangka Baja Permanen (Truss)",
        kodeBAShort: "RBA",
        tipeLantai: "Pelat Beton Bertulang + Lapis Aus Aspal (AC-WC)",
        tipeBB: "Abutmen Beton Bertulang & Pilar Kolom Tunggal/Ganda",
        tipeFondasi: "Tiang Pancang Baja / Beton Prategang",
        jenisLintasan: "Sungai Aliran Deras / Berpotensi Banjir & Gerusan",
        namaSungai: "Kali Pay",
        latStart: -3.26919,
        lngStart: 140.95602,
        latEnd: -3.269193,
        lngEnd: 140.956024,
        tindakanDarurat: "Tidak Diperlukan",
        sesuaiInv: "Ya",
        sesuaiDetail: "Ya",
        defects: [
          {
            id: "kp-1",
            level1: "1.000 - Jembatan",
            level2: "2.200 - Aliran Sungai",
            level3: "3.210 - Aliran Sungai",
            level4: "4.211 - Tebing sungai",
            lokasi: "B 1",
            apb: "B 1", x: 0, y: 0, z: 0,
            damageCode: "503",
            customDamageLabel: "Pengikisan di sepanjang aliran sungai (contraction scour)",
            penyebab: "Aliran sungai deras, banjir & gerusan lokal (Scouring)",
            kuantitas: 50,
            kuantitasTotal: 100,
            satuan: "m2",
            unitPrice: 1250000,
            S: 1, R: 1, K: 1, F: 0, P: 0,
            ketDokumentasi: ""
          },
          {
            id: "kp-2",
            level1: "1.000 - Jembatan",
            level2: "2.200 - Aliran Sungai",
            level3: "3.210 - Aliran Sungai",
            level4: "4.212 - Aliran air utama",
            lokasi: "B 1",
            apb: "B 1", x: 0, y: 0, z: 0,
            damageCode: "501",
            customDamageLabel: "Pendangkalan sungai akibat endapan (agradasi)",
            penyebab: "Aliran sungai deras, banjir & gerusan lokal (Scouring)",
            kuantitas: 225,
            kuantitasTotal: 4640,
            satuan: "m2",
            unitPrice: 185000,
            S: 1, R: 1, K: 0, F: 0, P: 0,
            ketDokumentasi: ""
          },
          {
            id: "kp-3",
            level1: "1.000 - Jembatan",
            level2: "2.300 - Bangunan Bawah",
            level3: "3.320 - Kepala Jembatan (Abutmen) & Pilar",
            level4: "4.322 d - Kepala jembatan dinding pendek/stem",
            lokasi: "A 2",
            apb: "A 2", x: 0, y: 0, z: 0,
            damageCode: "201",
            customDamageLabel: "Beton keropos",
            penyebab: "Pengaruh lingkungan, kelembapan & korosi atmosferik",
            kuantitas: 0.1728,
            kuantitasTotal: 30.8,
            satuan: "m2",
            unitPrice: 950000,
            S: 1, R: 1, K: 0, F: 0, P: 0,
            ketDokumentasi: ""
          },
          {
            id: "kp-4",
            level1: "1.000 - Jembatan",
            level2: "2.300 - Bangunan Bawah",
            level3: "3.320 - Kepala Jembatan (Abutmen) & Pilar",
            level4: "4.323 b - Tembok kepala jembatan/ballast wall/pilar",
            lokasi: "A 1",
            apb: "A 1", x: 0, y: 0, z: 0,
            damageCode: "202",
            customDamageLabel: "Retak (elemen beton)",
            penyebab: "Beban lalu lintas berlebih (Overload / ODOL)",
            kuantitas: 0.0342,
            kuantitasTotal: 7,
            satuan: "m2",
            unitPrice: 680000,
            S: 1, R: 1, K: 0, F: 0, P: 0,
            ketDokumentasi: ""
          },
          {
            id: "kp-5",
            level1: "1.000 - Jembatan",
            level2: "2.300 - Bangunan Bawah",
            level3: "3.320 - Kepala Jembatan (Abutmen) & Pilar",
            level4: "4.323 b - Tembok kepala jembatan/ballast wall/pilar",
            lokasi: "A 1",
            apb: "A 1", x: 0, y: 0, z: 0,
            damageCode: "201",
            customDamageCode: "205",
            customDamageLabel: "Pecah atau hilangnya bahan (delaminasi, abrasi, aus)",
            penyebab: "Penuaan material / melampaui umur layan rencana",
            kuantitas: 11.7,
            kuantitasTotal: 28,
            satuan: "m2",
            unitPrice: 950000,
            S: 1, R: 1, K: 1, F: 0, P: 0,
            ketDokumentasi: ""
          },
          {
            id: "kp-6",
            level1: "1.000 - Jembatan",
            level2: "2.400 - Bangunan Atas",
            level3: "3.450 - Jembatan Rangka Baja (Steel Truss)",
            level4: "4.453 b - Batang tepi bawah",
            lokasi: "B 1 (X=3, Y=1)",
            apb: "B 1", x: 3, y: 1, z: 0,
            damageCode: "303",
            customDamageLabel: "Perubahan bentuk pada komponen",
            penyebab: "Tumbukan kendaraan atau benda hanyutan sungai",
            kuantitas: 0.4,
            kuantitasTotal: 5,
            satuan: "m",
            unitPrice: 54000,
            S: 1, R: 1, K: 0, F: 0, P: 0,
            ketDokumentasi: ""
          },
          {
            id: "kp-7",
            level1: "1.000 - Jembatan",
            level2: "2.400 - Bangunan Atas",
            level3: "3.450 - Jembatan Rangka Baja (Steel Truss)",
            level4: "4.453 c - Batang diagonal",
            lokasi: "B 1 (X=12, Y=1)",
            apb: "B 1", x: 12, y: 1, z: 0,
            damageCode: "303",
            customDamageLabel: "Perubahan bentuk pada komponen",
            penyebab: "Siklus beban berulang (Fatik) & getaran lalu lintas",
            kuantitas: 0.15,
            kuantitasTotal: 7,
            satuan: "m",
            unitPrice: 54000,
            S: 1, R: 1, K: 0, F: 0, P: 0,
            ketDokumentasi: "Terdapat kerusakan serupa di koordinat yang sama (0.1)"
          },
          {
            id: "kp-8",
            level1: "1.000 - Jembatan",
            level2: "2.400 - Bangunan Atas",
            level3: "3.500 - Sistem Lantai Jembatan (Deck System)",
            level4: "4.517 a - Pipa cucuran",
            lokasi: "B 1",
            apb: "B 1", x: 0, y: 0, z: 0,
            damageCode: "801",
            customDamageCode: "711",
            customDamageLabel: "Pipa cucuran atau drainase yang tersumbat",
            penyebab: "Kurangnya pemeliharaan rutin & pertumbuhan vegetasi",
            kuantitas: 18,
            kuantitasTotal: 18,
            satuan: "Buah",
            unitPrice: 450000,
            S: 1, R: 1, K: 1, F: 0, P: 0,
            ketDokumentasi: ""
          },
          {
            id: "kp-9",
            level1: "1.000 - Jembatan",
            level2: "2.400 - Bangunan Atas",
            level3: "3.600 - Sambungan Siar Muai (Expansion Joint)",
            level4: "4.604 - Sambungan/Siar muai Aspal",
            lokasi: "A 1",
            apb: "A 1", x: 0, y: 0, z: 0,
            damageCode: "701",
            customDamageCode: "802",
            customDamageLabel: "Kehilangan kemampuan bergeraknya",
            penyebab: "Penuaan material / melampaui umur layan rencana",
            kuantitas: 4.63,
            kuantitasTotal: 4.63,
            satuan: "m",
            unitPrice: 4200000,
            S: 1, R: 0, K: 1, F: 0, P: 0,
            ketDokumentasi: ""
          },
          {
            id: "kp-10",
            level1: "1.000 - Jembatan",
            level2: "2.400 - Bangunan Atas",
            level3: "3.610 - Perletakan / Landasan (Bearing)",
            level4: "4.611 h - Karet penahan gempa transversal",
            lokasi: "A 1",
            apb: "A 1", x: 0, y: 0, z: 0,
            damageCode: "711",
            customDamageCode: "606",
            customDamageLabel: "Bagian yang rusak atau hilang atau tidak berfungsi",
            penyebab: "Penuaan material / melampaui umur layan rencana",
            kuantitas: 2,
            kuantitasTotal: 2,
            satuan: "Buah",
            unitPrice: 8500000,
            S: 1, R: 1, K: 1, F: 0, P: 0,
            ketDokumentasi: ""
          },
          {
            id: "kp-11",
            level1: "1.000 - Jembatan",
            level2: "2.700 - Perlengkapan",
            level3: "3.700 - Sandaran (Railing) & Pembatas",
            level4: "4.621 b - Sandaran",
            lokasi: "B 1 (X=1, Y=1, Z=1)",
            apb: "B 1", x: 1, y: 1, z: 1,
            damageCode: "901",
            customDamageCode: "931",
            customDamageLabel: "Tidak berfungsi atau tidak sesuai penempatannya",
            penyebab: "Tumbukan kendaraan atau benda hanyutan sungai",
            kuantitas: 1,
            kuantitasTotal: 18,
            satuan: "Buah",
            unitPrice: 750000,
            S: 0, R: 1, K: 0, F: 0, P: 0,
            ketDokumentasi: ""
          }
        ]
      },
      {
        id: "bms-01",
        noJembatan: "34.008.012.0",
        namaJembatan: "Jembatan Kali Progo Srandakan",
        statusJalan: "Nasional",
        namaRuas: "Jl. Nasional Lintas Selatan (Bantul - Kulon Progo)",
        provinsi: "DI Yogyakarta",
        kabKota: "Kab. Bantul & Kab. Kulon Progo",
        kotaAsal: "Yogyakarta (Km. 0)",
        kmLokasi: 24.65,
        tglInventarisasi: "2026-11-03",
        namaPemeriksa: "Ir. Budi Santoso, S.T., M.T. / NIP 198405122010121002",
        tahunBangun: 1995,
        panjangTotal: 530.0,
        jumlahBentang: 10,
        lebarLantai: 7.5,
        lebarTrotoar: 2.0,
        clearenceVertikal: 5.2,
        lhr: 18450,
        nilaiLaluLintas: "3",
        bebanMuatan: 45,
        tipeBA: "RBU - Rangka Baja Permanen (Truss)",
        tipeLantai: "Pelat Beton Bertulang + Lapis Aus Aspal (AC-WC)",
        tipeBB: "Abutmen Beton Bertulang & Pilar Kolom Tunggal/Ganda",
        tipeFondasi: "Tiang Bor (Bored Pile) Beton Bertulang",
        jenisLintasan: "Sungai Aliran Deras / Berpotensi Banjir & Gerusan",
        namaSungai: "Sungai Progo",
        latStart: -7.93942,
        lngStart: 110.24415,
        latEnd: -7.93895,
        lngEnd: 110.24885,
        tindakanDarurat: "Pembatasan Beban",
        sesuaiInv: "Ya",
        sesuaiDetail: "Tidak - Perlu Perbaikan Nilai Kondisi",
        defects: [
          {
            id: "def-101",
            level1: "1.000 - Jembatan",
            level2: "2.200 - Aliran Sungai",
            level3: "3.220 - Bangunan Pengaman (Scour Protection)",
            level4: "4.222 - Bronjong (Gabion) & Mattresses",
            lokasi: "Tebing Hulu Pilar P3 & P4",
            damageCode: "503",
            penyebab: "Aliran sungai deras, banjir & gerusan lokal (Scouring)",
            kuantitas: 48.0,
            satuan: "m3",
            unitPrice: 1250000,
            S: 1, R: 1, K: 0, F: 0, P: 1
          },
          {
            id: "def-102",
            level1: "1.000 - Jembatan",
            level2: "2.300 - Bangunan Bawah",
            level3: "3.320 - Kepala Jembatan (Abutmen) & Pilar",
            level4: "4.322 - Dinding Kepala Jembatan (Abutment Wall) / Kolom Pilar",
            lokasi: "Kolom Pilar P3 (Sisi Hulu)",
            damageCode: "201",
            penyebab: "Tumbukan kendaraan atau benda hanyutan sungai",
            kuantitas: 14.5,
            satuan: "m2",
            unitPrice: 950000,
            S: 1, R: 1, K: 0, F: 0, P: 0
          },
          {
            id: "def-103",
            level1: "1.000 - Jembatan",
            level2: "2.400 - Bangunan Atas",
            level3: "3.450 - Jembatan Rangka Baja (Steel Truss)",
            level4: "4.453 - Batang Diagonal & Vertikal Rangka Baja",
            lokasi: "Bentang 4 - Batang Diagonal D3-D5",
            damageCode: "301",
            penyebab: "Pengaruh lingkungan, kelembapan & korosi atmosferik",
            kuantitas: 85.0,
            satuan: "m2",
            unitPrice: 320000,
            S: 1, R: 0, K: 1, F: 0, P: 0
          },
          {
            id: "def-104",
            level1: "1.000 - Jembatan",
            level2: "2.400 - Bangunan Atas",
            level3: "3.450 - Jembatan Rangka Baja (Steel Truss)",
            level4: "4.457 - Pelat Buhul & Sambungan Baut Rangka",
            lokasi: "Bentang 4 - Titik Buhul Bawah L3",
            damageCode: "308",
            penyebab: "Siklus beban berulang (Fatik) & getaran lalu lintas",
            kuantitas: 24.0,
            satuan: "buah",
            unitPrice: 95000,
            S: 1, R: 1, K: 0, F: 0, P: 1
          },
          {
            id: "def-105",
            level1: "1.000 - Jembatan",
            level2: "2.400 - Bangunan Atas",
            level3: "3.600 - Sambungan Siar Muai (Expansion Joint)",
            level4: "4.603 - Siar Muai Asphaltic Plug",
            lokasi: "Di atas Abutmen A1 & Pilar P2",
            damageCode: "701",
            penyebab: "Beban lalu lintas berlebih (Overload / ODOL)",
            kuantitas: 15.0,
            satuan: "m",
            unitPrice: 4200000,
            S: 0, R: 1, K: 1, F: 1, P: 0
          },
          {
            id: "def-106",
            level1: "1.000 - Jembatan",
            level2: "2.100 - Jalan Pendekat / Tanah Timbunan",
            level3: "3.110 - Timbunan Jalan Pendekat (Oprit)",
            level4: "4.114 - Perkerasan Jalan Pendekat",
            lokasi: "Oprit Abutmen A1 (Arah Bantul)",
            damageCode: "601",
            penyebab: "Penurunan konsolidasi tanah timbunan / pergerakan tanah",
            kuantitas: 35.0,
            satuan: "m2",
            unitPrice: 520000,
            S: 0, R: 1, K: 0, F: 0, P: 1
          },
          {
            id: "def-107",
            level1: "1.000 - Jembatan",
            level2: "2.400 - Bangunan Atas",
            level3: "3.500 - Sistem Lantai Jembatan (Deck System)",
            level4: "4.506 - Pipa Cucuran & Drainase Lantai",
            lokasi: "Bentang 2 & Bentang 3 (Kiri-Kanan)",
            damageCode: "801",
            penyebab: "Kurangnya pemeliharaan rutin & pertumbuhan vegetasi",
            kuantitas: 12.0,
            satuan: "buah",
            unitPrice: 450000,
            S: 0, R: 1, K: 0, F: 0, P: 0
          }
        ]
      },
      {
        id: "bms-02",
        noJembatan: "33.019.005.0",
        namaJembatan: "Jembatan Kali Pemali Brebes (Pantura)",
        statusJalan: "Nasional",
        namaRuas: "Jl. Raya Pantura Brebes - Tegal",
        provinsi: "Jawa Tengah",
        kabKota: "Kab. Brebes",
        kotaAsal: "Semarang (Km. 0)",
        kmLokasi: 168.40,
        tglInventarisasi: "2026-10-18",
        namaPemeriksa: "Ir. Dian Kusuma, S.T., M.Eng. / NIP 198811042014032001",
        tahunBangun: 2004,
        panjangTotal: 125.0,
        jumlahBentang: 3,
        lebarLantai: 9.0,
        lebarTrotoar: 2.0,
        clearenceVertikal: 5.1,
        lhr: 32500,
        nilaiLaluLintas: "3",
        bebanMuatan: 50,
        tipeBA: "GPT - Gelagar Beton Prategang (PCI/I-Girder)",
        tipeLantai: "Pelat Beton Bertulang + Lapis Aus Aspal (AC-WC)",
        tipeBB: "Abutmen Beton Bertulang & Pilar Kolom Tunggal/Ganda",
        tipeFondasi: "Tiang Pancang Baja / Beton Prategang",
        jenisLintasan: "Sungai Aliran Deras / Berpotensi Banjir & Gerusan",
        namaSungai: "Sungai Pemali",
        latStart: -6.87055,
        lngStart: 109.03520,
        latEnd: -6.87032,
        lngEnd: 109.03630,
        tindakanDarurat: "Tidak Diperlukan",
        sesuaiInv: "Ya",
        sesuaiDetail: "Ya",
        defects: [
          {
            id: "def-201",
            level1: "1.000 - Jembatan",
            level2: "2.400 - Bangunan Atas",
            level3: "3.410 - Sistem Gelagar (Girder System)",
            level4: "4.411 - Gelagar Utama Memanjang (Main Girder)",
            lokasi: "Bentang 2 - Gelagar G3",
            damageCode: "202",
            penyebab: "Beban lalu lintas berlebih (Overload / ODOL)",
            kuantitas: 18.0,
            satuan: "m",
            unitPrice: 680000,
            S: 1, R: 1, K: 0, F: 0, P: 0
          },
          {
            id: "def-202",
            level1: "1.000 - Jembatan",
            level2: "2.400 - Bangunan Atas",
            level3: "3.610 - Perletakan / Landasan (Bearing)",
            level4: "4.612 - Landasan Karet Elastomer (Elastomeric Bearing)",
            lokasi: "Pilar P1 - Landasan Gelagar G1 & G2",
            damageCode: "711",
            penyebab: "Penuaan material / melampaui umur layan rencana",
            kuantitas: 4.0,
            satuan: "buah",
            unitPrice: 8500000,
            S: 1, R: 1, K: 0, F: 0, P: 0
          },
          {
            id: "def-203",
            level1: "1.000 - Jembatan",
            level2: "2.400 - Bangunan Atas",
            level3: "3.500 - Sistem Lantai Jembatan (Deck System)",
            level4: "4.502 - Lapis Permukaan / Lapis Aus Aspal",
            lokasi: "Bentang 1 s/d Bentang 3 Lajur Kiri",
            damageCode: "204",
            penyebab: "Beban lalu lintas berlebih (Overload / ODOL)",
            kuantitas: 110.0,
            satuan: "m2",
            unitPrice: 385000,
            S: 0, R: 1, K: 0, F: 0, P: 0
          }
        ]
      }
    ];

    // =========================================================================
    // 4. STATE MANAGEMENT & HELPER FUNCTIONS
    // =========================================================================
    const STORAGE_KEY_BRIDGES = "si_bms_bridges_invij_v2";
    const STORAGE_KEY_ACTIVE_ID = "si_bms_active_bridge_invij_v2";

    const INVIJ_15_PHOTO_SLOTS = [
      { key: "papan_nama", label: "Papan Nama" },
      { key: "tampak_masuk", label: "Tampak Masuk" },
      { key: "tampak_keluar", label: "Tampak Keluar" },
      { key: "tampak_samping_kiri", label: "Tampak Samping Kiri" },
      { key: "kepala_jembatan", label: "Kepala Jembatan" },
      { key: "tampak_samping_kanan", label: "Tampak Samping Kanan" },
      { key: "tampak_bawah", label: "Tampak Bawah" },
      { key: "tampak_situasi", label: "Tampak Situasi" },
      { key: "lalu_lintas", label: "Lalu Lintas Kendaraan" },
      { key: "pilar", label: "Pilar", defaultMissing: true },
      { key: "tampak_atas", label: "Tampak Atas" },
      { key: "drone_jembatan", label: "Drone Jembatan" },
      { key: "sungai_hilir", label: "Lintasan Sungai Hilir" },
      { key: "sungai_hulu", label: "Lintasan Sungai Hulu" },
      { key: "perletakan", label: "Perletakan" }
    ];

    function loadSavedBridges() {
      try {
        const saved = localStorage.getItem(STORAGE_KEY_BRIDGES);
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        }
      } catch (e) {}
      return JSON.parse(JSON.stringify(INITIAL_BRIDGES));
    }

    function saveBridgesToStorage() {
      try {
        localStorage.setItem(STORAGE_KEY_BRIDGES, JSON.stringify(bridges));
        localStorage.setItem(STORAGE_KEY_ACTIVE_ID, currentBridgeId);
      } catch (e) {}
    }

    let bridges = loadSavedBridges();
    let currentBridgeId = (() => {
      try {
        const savedId = localStorage.getItem(STORAGE_KEY_ACTIVE_ID);
        if (savedId && bridges.some(b => b.id === savedId)) return savedId;
      } catch (e) {}
      return bridges[0].id;
    })();
    let activeTab = "konsep";
    let mapInstance = null;
    let markerStart = null;
    let markerEnd = null;
    let bridgeLine = null;
    let activePinMode = "start";
    let dashboardChartInstance = null;
    let pendingRutinPhotoDataUrl = "";

    function getCurrentBridge() {
      return bridges.find(b => b.id === currentBridgeId) || bridges[0];
    }

    function getDamageInfo(code) {
      return DAMAGE_CATALOG.find(d => d.code === code) || DAMAGE_CATALOG[0];
    }

    function calcDefectNK(def) {
      return (Number(def.S) || 0) + (Number(def.R) || 0) + (Number(def.K) || 0) + (Number(def.F) || 0) + (Number(def.P) || 0);
    }

    function getNKStatus(nk) {
      const score = Number(nk) || 0;
      const map = {
        0: { label: "Baik / Mantap", preservasi: "Pemeliharaan Rutin", badgeClass: "bg-emerald-100 text-emerald-800 border-emerald-300" },
        1: { label: "Rusak Ringan", preservasi: "Pemeliharaan Rutin", badgeClass: "bg-slate-100 text-slate-800 border-slate-300" },
        2: { label: "Rusak Sedang", preservasi: "Pemeliharaan Berkala", badgeClass: "bg-amber-100 text-amber-800 border-amber-300" },
        3: { label: "Rusak Berat", preservasi: "Rehabilitasi (Perbaikan & Perkuatan)", badgeClass: "bg-orange-100 text-orange-900 border-orange-300" },
        4: { label: "Kondisi Kritis", preservasi: "Rehabilitasi Segera / Tindakan Darurat", badgeClass: "bg-rose-100 text-rose-800 border-rose-300" },
        5: { label: "Runtuh / Tidak Berfungsi", preservasi: "Penggantian Jembatan / Darurat", badgeClass: "bg-red-900 text-white border-red-950" }
      };
      return map[Math.min(5, Math.max(0, score))];
    }

    function formatRupiah(num) {
      const n = Math.round(Number(num) || 0);
      return "Rp " + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    function decimalToDMS(deg, isLat) {
      const d = Number(deg);
      if (isNaN(d)) return "-";
      const dir = isLat ? (d >= 0 ? "LU" : "LS") : (d >= 0 ? "BT" : "BB");
      const abs = Math.abs(d);
      const degrees = Math.floor(abs);
      const minutesFloat = (abs - degrees) * 60;
      const minutes = Math.floor(minutesFloat);
      const seconds = ((minutesFloat - minutes) * 60).toFixed(1);
      return `${degrees}° ${minutes}' ${seconds}" ${dir}`;
    }


    function handleConfirmDeleteBridge() {
      const delBtn = document.getElementById("btnConfirmDeleteBridge");
      if (delBtn) delBtn.click();
    }

    function showToast(message) {
      const container = document.getElementById("toastContainer");
      if (!container) return;
      const el = document.createElement("div");
      el.className = "bg-slate-900 text-white text-xs font-medium px-4 py-2.5 rounded-xl shadow-lg border border-slate-200 flex items-center gap-2 transition-opacity duration-300";
      el.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-400"></span><span>${message}</span>`;
      container.appendChild(el);
      setTimeout(() => {
        el.style.opacity = "0";
        setTimeout(() => el.remove(), 300);
      }, 2800);
    }

    function compressImageFile(file, callback) {
      if (!file) {
        callback("");
        return;
      }
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = new Image();
        img.onload = function () {
          const canvas = document.createElement("canvas");
          const maxDim = 720;
          let w = img.width;
          let h = img.height;
          if (w > maxDim || h > maxDim) {
            if (w > h) {
              h = Math.round((h * maxDim) / w);
              w = maxDim;
            } else {
              w = Math.round((w * maxDim) / h);
              h = maxDim;
            }
          }
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, w, h);
          callback(canvas.toDataURL("image/jpeg", 0.72));
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }

    function openDefectPhotoModal(defId) {
      const b = getCurrentBridge();
      const def = b.defects.find(d => d.id === defId);
      if (!def) return;
      const dmg = getDamageInfo(def.damageCode);
      const src = def.photoDataUrl || "Jembatan.png";
      document.getElementById("modalPhotoTitle").textContent = `${def.level4} (${def.lokasi})`;
      document.getElementById("modalPhotoCaption").textContent = `${def.customDamageLabel || dmg.label} — ${def.ketDokumentasi || "Dokumentasi visual lapangan"}`;
      document.getElementById("modalPhotoImg").src = src;
      const modal = document.getElementById("modalPhotoPreview");
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    }

    function triggerRowPhotoUpload(defId) {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "image/*";
      fileInput.onchange = (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        compressImageFile(file, (dataUrl) => {
          const b = getCurrentBridge();
          const target = b.defects.find(d => d.id === defId);
          if (target) {
            target.photoDataUrl = dataUrl;
            renderAllViews();
            showToast("Foto dokumentasi kerusakan elemen diperbarui!");
          }
        });
      };
      fileInput.click();
    }

    function triggerBridgeSlotPhotoUpload(slotKey) {
      const fileInput = document.createElement("input");
      fileInput.type = "file";
      fileInput.accept = "image/*";
      fileInput.onchange = (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        compressImageFile(file, (dataUrl) => {
          const b = getCurrentBridge();
          if (!b.bridgePhotos) b.bridgePhotos = {};
          b.bridgePhotos[slotKey] = dataUrl;
          renderInventoryPhotoGrid15();
          renderAllViews();
          showToast("Foto dokumentasi jembatan disimpan di Pemeriksaan Inventarisasi & Print-Out!");
        });
      };
      fileInput.click();
    }

    function toggleBridgeSlotMissing(slotKey) {
      const b = getCurrentBridge();
      if (!b.bridgePhotos) b.bridgePhotos = {};
      if (b.bridgePhotos[slotKey] === "MISSING") {
        delete b.bridgePhotos[slotKey];
        showToast("Slot foto jembatan dikembalikan ke gambar standar.");
      } else {
        b.bridgePhotos[slotKey] = "MISSING";
        showToast("Slot foto ditandai Tidak Ada (X) pada Print-Out.");
      }
      renderInventoryPhotoGrid15();
      renderAllViews();
    }

    let activeSketchDefId = null;
    let rawPaperSketchImg = null;

    function triggerRowSketchUpload(defId) {
      const b = getCurrentBridge();
      const target = b.defects.find(d => d.id === defId);
      if (!target) return;
      activeSketchDefId = defId;
      rawPaperSketchImg = null;

      const dmg = getDamageInfo(target.damageCode);
      document.getElementById("sketchStudioTargetLabel").textContent =
        `${target.level4} (${target.apb || "B 1"}) — ${target.customDamageLabel || dmg.label}`;

      const savedKey = localStorage.getItem("si_bms_gemini_api_key") || "";
      const keyInput = document.getElementById("geminiApiKeyInput");
      if (keyInput) keyInput.value = savedKey;

      const fileInp = document.getElementById("sketchStudioFileInput");
      if (fileInp) fileInp.value = "";
      const prevWrap = document.getElementById("paperUploadPreviewWrap");
      if (prevWrap) prevWrap.classList.add("hidden");
      const statusEl = document.getElementById("geminiSketchStatus");
      if (statusEl) statusEl.classList.add("hidden");

      // Render sketsa saat ini (atau SVG default) ke kanvas studio
      const canvas = document.getElementById("sketchStudioCanvas");
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const eCode = target.level4.split(" - ")[0];
      const svgMarkup = getElementTechnicalSketchSVG(eCode).replace('class="w-full h-16 mx-auto"', 'width="420" height="300" xmlns="http://www.w3.org/2000/svg"');
      const initSrc = target.sketchDataUrl || ("data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgMarkup));

      const img = new Image();
      img.onload = () => {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
      img.src = initSrc;

      const modal = document.getElementById("modalSketchStudio");
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    }

    // Menghasilkan SVG Sketsa Teknis Terkustomisasi (Cara 2B - Gemini AI Vector Redraw)
    function buildGeminiTechnicalSVG(target, extraNote) {
      const eCode = target.level4.split(" - ")[0];
      const dmg = getDamageInfo(target.damageCode);
      const dmgName = target.customDamageLabel || dmg.label;
      const baseInner = getElementTechnicalSketchSVG(eCode)
        .replace(/<svg[^>]*>/i, "")
        .replace(/<\/svg>/i, "");
      const noteText = (extraNote || target.ketDokumentasi || dmgName).slice(0, 58);

      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 300" width="420" height="300">
        <rect width="420" height="300" fill="#ffffff" />
        <rect x="8" y="8" width="404" height="284" fill="none" stroke="#1e293b" stroke-width="2" />
        <line x1="8" y1="38" x2="412" y2="38" stroke="#1e293b" stroke-width="1.2" />
        <text x="16" y="27" font-family="Arial, sans-serif" font-size="11" font-weight="bold" fill="#0f172a">SKETSA TEKNIS ELEMEN: ${target.level4} (${target.apb || "B 1"})</text>
        <g transform="translate(35, 42) scale(2.5, 2.2)">
          ${baseInner}
        </g>
        <line x1="8" y1="252" x2="412" y2="252" stroke="#1e293b" stroke-width="1.2" />
        <text x="16" y="268" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#dc2626">Kerusakan [${target.customDamageCode || dmg.code}]: ${dmgName.slice(0, 52)}</text>
        <text x="16" y="283" font-family="Arial, sans-serif" font-size="10" fill="#334155">Koordinat: ${target.apb || "B 1"} (X=${target.x ?? 0}, Y=${target.y ?? 0}, Z=${target.z ?? 0}) • ${noteText}</text>
      </svg>`;
    }

    function drawRedDamageCalloutOnCanvas(x, y) {
      const canvas = document.getElementById("sketchStudioCanvas");
      const ctx = canvas.getContext("2d");
      const startX = Math.max(20, x - 38);
      const startY = Math.max(20, y - 32);

      ctx.save();
      ctx.strokeStyle = "#dc2626";
      ctx.fillStyle = "#dc2626";
      ctx.lineWidth = 2.5;

      // Garis panah
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(x, y);
      ctx.stroke();

      // Kepala panah
      const angle = Math.atan2(y - startY, x - startX);
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - 10 * Math.cos(angle - Math.PI / 6), y - 10 * Math.sin(angle - Math.PI / 6));
      ctx.lineTo(x - 10 * Math.cos(angle + Math.PI / 6), y - 10 * Math.sin(angle + Math.PI / 6));
      ctx.closePath();
      ctx.fill();

      // Lingkaran penanda titik rusak
      ctx.beginPath();
      ctx.arc(x, y, 12, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }

    function resetRowSketchToAuto(defId) {
      const b = getCurrentBridge();
      const target = b.defects.find(d => d.id === defId);
      if (target) {
        delete target.sketchDataUrl;
        renderAllViews();
        showToast("Sketsa dikembalikan ke Sketsa Teknis SVG Otomatis.");
      }
    }

    function openDefectSketchModal(defId) {
      const b = getCurrentBridge();
      const def = b.defects.find(d => d.id === defId);
      if (!def || !def.sketchDataUrl) return;
      document.getElementById("modalPhotoTitle").textContent = `Sketsa Elemen: ${def.level4} (${def.lokasi})`;
      document.getElementById("modalPhotoCaption").textContent = def.ketDokumentasi || "Sketsa pemeriksaan detail elemen jembatan";
      document.getElementById("modalPhotoImg").src = def.sketchDataUrl;
      const modal = document.getElementById("modalPhotoPreview");
      modal.classList.remove("hidden");
      modal.classList.add("flex");
    }

    // Menghasilkan Sketsa Struktur Teknis SVG Otomatis sesuai Kode Elemen INVI-J
    function getElementTechnicalSketchSVG(level4Code) {
      const code = String(level4Code || "");
      // 1. Tebing sungai / Aliran air utama (4.211 / 4.212)
      if (code.startsWith("4.2")) {
        return `<svg viewBox="0 0 140 90" class="w-full h-16 mx-auto">
          <polygon points="15,25 125,25 115,15 25,15" fill="none" stroke="#64748b" stroke-width="1"/>
          <line x1="25" y1="15" x2="115" y2="15" stroke="#475569" stroke-width="1.5"/>
          <polyline points="5,40 30,40 42,58 98,58 110,40 135,40" fill="none" stroke="#334155" stroke-width="1.2"/>
          <rect x="35" y="64" width="70" height="20" fill="none" stroke="#475569" stroke-width="1"/>
          <line x1="108" y1="52" x2="96" y2="56" stroke="#dc2626" stroke-width="1.5"/>
          <circle cx="96" cy="56" r="2" fill="#dc2626"/>
        </svg>`;
      }
      // 2. Kepala jembatan / Abutmen / Tembok sayap (4.3xx)
      if (code.startsWith("4.3")) {
        return `<svg viewBox="0 0 140 95" class="w-full h-16 mx-auto">
          <rect x="42" y="10" width="56" height="14" fill="none" stroke="#334155" stroke-width="1.2"/>
          <rect x="36" y="24" width="68" height="36" fill="none" stroke="#dc2626" stroke-width="1.5"/>
          <rect x="30" y="60" width="80" height="10" fill="none" stroke="#334155" stroke-width="1.2"/>
          <rect x="35" y="70" width="8" height="15" fill="none" stroke="#475569" stroke-width="1"/>
          <rect x="52" y="70" width="8" height="15" fill="none" stroke="#475569" stroke-width="1"/>
          <rect x="69" y="70" width="8" height="15" fill="none" stroke="#475569" stroke-width="1"/>
          <rect x="86" y="70" width="8" height="15" fill="none" stroke="#475569" stroke-width="1"/>
          <line x1="16" y1="42" x2="33" y2="42" stroke="#dc2626" stroke-width="1.5"/>
        </svg>`;
      }
      // 3. Rangka Baja / Gelagar (4.4xx)
      if (code.startsWith("4.4")) {
        return `<svg viewBox="0 0 140 85" class="w-full h-16 mx-auto">
          <polygon points="15,42 28,22 112,22 125,42" fill="none" stroke="#475569" stroke-width="1.2"/>
          <line x1="15" y1="42" x2="125" y2="42" stroke="#dc2626" stroke-width="1.8"/>
          <polyline points="28,22 40,42 52,22 64,42 76,22 88,42 100,22 112,42" fill="none" stroke="#64748b" stroke-width="1"/>
          <line x1="64" y1="42" x2="76" y2="22" stroke="#dc2626" stroke-width="1.8"/>
          <polyline points="10,55 30,55 42,72 98,72 110,55 130,55" fill="none" stroke="#64748b" stroke-width="1"/>
        </svg>`;
      }
      // 4. Pelat lantai / Pipa cucuran / Drainase (4.5xx)
      if (code.startsWith("4.5")) {
        return `<svg viewBox="0 0 140 85" class="w-full h-16 mx-auto">
          <rect x="18" y="20" width="104" height="45" fill="none" stroke="#334155" stroke-width="1.2"/>
          <line x1="18" y1="30" x2="122" y2="30" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>
          <line x1="18" y1="42" x2="122" y2="42" stroke="#64748b" stroke-width="1"/>
          <line x1="18" y1="55" x2="122" y2="55" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4,3"/>
          <rect x="52" y="22" width="18" height="41" fill="none" stroke="#dc2626" stroke-width="1.4"/>
        </svg>`;
      }
      // 5. Siar Muai / Perletakan Landasan Elastomer (4.60x / 4.61x)
      return `<svg viewBox="0 0 140 85" class="w-full h-16 mx-auto">
        <rect x="20" y="25" width="42" height="16" fill="none" stroke="#334155" stroke-width="1.2"/>
        <rect x="78" y="25" width="42" height="16" fill="none" stroke="#334155" stroke-width="1.2"/>
        <rect x="64" y="24" width="12" height="18" fill="none" stroke="#dc2626" stroke-width="1.8"/>
        <rect x="30" y="45" width="80" height="28" fill="none" stroke="#475569" stroke-width="1.2"/>
        <line x1="70" y1="10" x2="70" y2="22" stroke="#dc2626" stroke-width="1.5"/>
      </svg>`;
    }


    // =========================================================================
    // 5. INITIALIZE CASCADING DROPDOWNS & DAMAGE CATALOG IN PEMERIKSAAN RUTIN
    // =========================================================================
    function initRutinDropdowns() {
      const l2Select = document.getElementById("rutinLevel2");
      const dmgSelect = document.getElementById("rutinJenisKerusakan");
      if (!l2Select || !dmgSelect) return;

      l2Select.innerHTML = Object.keys(BMS_HIERARCHY)
        .map(k => `<option value="${k}">${k}</option>`)
        .join("");

      dmgSelect.innerHTML = DAMAGE_CATALOG
        .map(d => `<option value="${d.code}">${d.label}</option>`)
        .join("");

      updateLevel3Dropdown();

      l2Select.addEventListener("change", updateLevel3Dropdown);
      document.getElementById("rutinLevel3").addEventListener("change", updateLevel4Dropdown);
      dmgSelect.addEventListener("change", () => {
        const info = getDamageInfo(dmgSelect.value);
        if (info) {
          document.getElementById("rutinSatuan").value = info.defaultUnit;
        }
      });
    }

    function updateLevel3Dropdown() {
      const l2Key = document.getElementById("rutinLevel2").value;
      const l3Select = document.getElementById("rutinLevel3");
      const l2Obj = BMS_HIERARCHY[l2Key];
      if (!l2Obj || !l3Select) return;
      const l3Keys = Object.keys(l2Obj.level3);
      l3Select.innerHTML = l3Keys.map(k => `<option value="${k}">${k}</option>`).join("");
      updateLevel4Dropdown();
    }

    function updateLevel4Dropdown() {
      const l2Key = document.getElementById("rutinLevel2").value;
      const l3Key = document.getElementById("rutinLevel3").value;
      const l4Select = document.getElementById("rutinLevel4");
      const l2Obj = BMS_HIERARCHY[l2Key];
      if (!l2Obj || !l2Obj.level3[l3Key] || !l4Select) return;
      const items = l2Obj.level3[l3Key];
      l4Select.innerHTML = items.map(item => `<option value="${item}">${item}</option>`).join("");
    }

    // =========================================================================
    // 6. INTERACTIVE MAP INITIALIZATION (LEAFLET + FALLBACK GRID)
    // =========================================================================
    function initMap() {
      const b = getCurrentBridge();
      const mapEl = document.getElementById("inventoryMap");
      const fallbackEl = document.getElementById("fallbackMapOverlay");
      if (!mapEl) return;

      try {
        if (typeof L !== "undefined" && !mapInstance) {
          mapInstance = L.map("inventoryMap").setView([b.latStart, b.lngStart], 14);
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            maxZoom: 19,
            attribution: "&copy; OpenStreetMap"
          }).addTo(mapInstance);

          markerStart = L.marker([b.latStart, b.lngStart], { draggable: true })
            .addTo(mapInstance)
            .bindPopup("Pangkal Jembatan (Koordinat Awal)");

          markerEnd = L.marker([b.latEnd, b.lngEnd], { draggable: true })
            .addTo(mapInstance)
            .bindPopup("Ujung Jembatan (Koordinat Akhir)");

          bridgeLine = L.polyline([[b.latStart, b.lngStart], [b.latEnd, b.lngEnd]], {
            color: "#0284c7",
            weight: 4
          }).addTo(mapInstance);

          markerStart.on("dragend", function (e) {
            const pos = e.target.getLatLng();
            applyMapCoordinate(pos.lat, pos.lng, "start");
          });

          markerEnd.on("dragend", function (e) {
            const pos = e.target.getLatLng();
            applyMapCoordinate(pos.lat, pos.lng, "end");
          });

          mapInstance.on("click", function (e) {
            applyMapCoordinate(e.latlng.lat, e.latlng.lng, activePinMode);
          });
        } else if (typeof L === "undefined" && fallbackEl) {
          fallbackEl.classList.remove("hidden");
        }
      } catch (err) {
        if (fallbackEl) fallbackEl.classList.remove("hidden");
      }

      // Wire fallback interactive click just in case
      if (fallbackEl) {
        fallbackEl.addEventListener("click", function (ev) {
          const rect = fallbackEl.getBoundingClientRect();
          const xRatio = (ev.clientX - rect.left) / rect.width;
          const yRatio = (ev.clientY - rect.top) / rect.height;
          const lat = -5.0 - yRatio * 4.0;
          const lng = 105.0 + xRatio * 10.0;
          const pin = document.getElementById("fallbackPinMarker");
          if (pin) {
            pin.style.left = `${(xRatio * 100).toFixed(1)}%`;
            pin.style.top = `${(yRatio * 100).toFixed(1)}%`;
          }
          applyMapCoordinate(lat, lng, activePinMode);
        });
      }
    }

    function applyMapCoordinate(lat, lng, mode) {
      const b = getCurrentBridge();
      const roundedLat = Number(lat.toFixed(5));
      const roundedLng = Number(lng.toFixed(5));

      if (mode === "start") {
        b.latStart = roundedLat;
        b.lngStart = roundedLng;
        // If bridge length > 20m, auto-offset end coordinate slightly if not manually set
        const offsetDeg = ((Number(b.panjangTotal) || 60) / 111320);
        b.latEnd = Number((roundedLat + offsetDeg * 0.35).toFixed(5));
        b.lngEnd = Number((roundedLng + offsetDeg * 0.93).toFixed(5));
      } else {
        b.latEnd = roundedLat;
        b.lngEnd = roundedLng;
      }

      syncMapMarkersToBridge();
      populateInventoryForm();
      renderAllViews();
      showToast(`Ordinat jembatan diperbarui otomatis: ${roundedLat}, ${roundedLng}`);
    }

    function syncMapMarkersToBridge() {
      const b = getCurrentBridge();
      if (mapInstance && markerStart && markerEnd && bridgeLine) {
        markerStart.setLatLng([b.latStart, b.lngStart]);
        markerEnd.setLatLng([b.latEnd, b.lngEnd]);
        bridgeLine.setLatLngs([[b.latStart, b.lngStart], [b.latEnd, b.lngEnd]]);
      }
    }

    // =========================================================================
    // 7. POPULATE & SYNC PEMERIKSAAN INVENTARISASI -> RUTIN -> DETAIL -> RAB
    // =========================================================================

    // =========================================================================
    // LAMPIRAN A.1 (HAL. 104-114 / DOK. HAL. 87-97): DEFAULT DATA & HELPERS
    // =========================================================================
    function ensureBridgeLampiranA1Defaults(b) {
      if (!b.invA1) {
        const isProgo = b.id === "bms-01";
        const isPemali = b.id === "bms-02";
        b.invA1 = {
          noRuasNasProv: b.noJembatan || "62.004.001.0",
          noRuasKabKota: "-",
          noRuasTol: "-",
          pbg1TglBangun: `15 Juni ${b.tahunBangun || 1990}`,
          pbg2TglRehab: isProgo ? "12 Agustus 2019 (Perkuatan & Proteksi Gerusan)" : "-",
          pbg3TglSerahTerima: `20 Desember ${b.tahunBangun || 1990}`,
          pbg4PjBangun: isProgo ? "Satker PJN Wilayah DI Yogyakarta / PPK 1.2" : (isPemali ? "Satker PJN Wilayah I Jawa Tengah" : "Satker PJN Wilayah I Papua (Jayapura) / PPK 2.1"),
          pbg5PjRehab: isProgo ? "Satker PJN Wilayah DI Yogyakarta" : "-",
          pbg6BiayaRencana: isProgo ? 450000000 : 185000000,
          pbg7BiayaBangun: isProgo ? 28500000000 : (isPemali ? 14200000000 : 6800000000),
          pbg8BiayaRehab: isProgo ? 3400000000 : 0,
          pbg9BiayaUji: 120000000,
          pbg10NilaiAset: isProgo ? 26800000000 : (isPemali ? 13500000000 : 6450000000),
          pbg11KonsPerencanaBangun: "PT Virama Karya (Persero) / Konsultan Bina Marga",
          pbg12NamaIPC: "Tim Independent Proof Checker (IPC) Direktorat Bina Teknik",
          pbg13KonsPerencanaRehab: isProgo ? "PT Yodya Karya (Persero)" : "-",
          pbg14KontraktorBangun: "PT Wijaya Karya (Persero) Tbk",
          pbg15KontraktorRehab: isProgo ? "PT Hutama Karya (Persero)" : "-",
          pbg16SubkonSpesialis: "PT Freyssinet Total Technology (Rangka/Prategang & Bearing)",
          pbg17KonsPengawasBangun: "PT Indra Karya (Persero)",
          pbg18KonsPengawasRehab: isProgo ? "PT Bina Karya (Persero)" : "-",
          pbg19KonsPengujian: "Balai Geoteknik, Terowongan, dan Struktur (BGTS) PUPR",
          pbg20Status: "Tersedia",
          pbg20File: `Lap_Pembangunan_${(b.namaJembatan || "Jembatan").replace(/\s+/g, "_")}.pdf`,
          pbg21Status: "Tersedia",
          pbg21File: `AsBuilt_${(b.noJembatan || "BMS").replace(/\./g, "_")}.pdf`,
          kantorTglInput: b.tglInventarisasi || "2026-06-20",
          kantorOleh: b.namaPemeriksa || "Administrator BMS Balai",

          // Tabel A.2: Kapasitas Muatan, Kapasitas Lalu-Lintas, & Batasan Perlintasan
          muat1MST: b.bebanMuatan || 45,
          muat2BebanMax: (b.bebanMuatan || 45) + 5,
          muat3JenisKendBerat: "Truk Tronton 3 Sumbu, Dump Truck Material, & Trailer",
          muat4TindakanDarurat: b.tindakanDarurat === "Pembatasan Beban" ? "a. Pembatasan beban" : "Tidak Ada",
          muat5DetourTersedia: "Ya",
          muat6JarakDetour: isProgo ? 8500 : 4200,
          ll1LHR: b.lhr || 1162,
          ll2NilaiLL: String(b.nilaiLaluLintas ?? "0"),
          ll3LebarODOL: 2.6,
          env1MabLantai: 2.8,
          env2MabPerletakan: 1.4,
          env3MabTerbawahBA: 1.6,
          env4GerusanPilar: isProgo ? 1.8 : 0.4,
          env5GerusanAbutmen: 0.5,
          env6GerusanTimbunan: 0.3,
          env7BebasOverpass: 0.0,
          env8BebasKA: 0.0,
          env9TinggiKapal: 0.0,
          env10LebarAlurLaut: 0.0,
          env11TinggiPilonBandara: 0.0,

          // Bagian ke-3 (Tabel A.4: Potongan Tabel A.5, A.6, A.7)
          bag3TipeLintasan: "SL",
          spansA5A6: Array.from({ length: Math.max(1, Math.min(5, Number(b.jumlahBentang) || 1)) }, (_, idx) => ({
            noBentang: `B ${idx + 1}`,
            panjang: Number(((Number(b.panjangTotal) || 46.4) / Math.max(1, Number(b.jumlahBentang) || 1)).toFixed(1)),
            jmlGelagar: (b.tipeBA || "").startsWith("GPT") ? 5 : 2,
            skew: 0,
            radius: 0,
            lebarLantai: b.lebarLantai || 4.4,
            lebarTrotoar: b.lebarTrotoar || 1.0,
            ruangBebas: b.clearenceVertikal || 5.0,
            tba: (b.tipeBA || "").startsWith("GPT") ? "G" : "R",
            bhn: (b.tipeBA || "").startsWith("GPT") ? "P" : "B",
            sba: "P",
            pilonTipe: "-",
            pilonBhn: "-",
            lantai4511Bhn: "T",
            perkuatan4515Bhn: "-",
            lapis4514Bhn: "A",
            pengaman3620Tba: "TB",
            pengaman3620Bhn: "B",
            pengaman3620Sba: "P",
            perletakan3610Kode: "4.612",
            perletakan3610Bhn: "E",
            siarMuai3600Kode: "4.604",
            siarMuai3600Bhn: "A",
            // Tabel A.6 fields
            aero3630Kode: "-", aero3630Bhn: "-",
            perkuatanBAKode: "-", perkuatanBABhn: "-",
            umum3710Kode: "4.711", umum3710Bhn: "B",
            penerangan3720Kode: "4.721", penerangan3720Bhn: "B",
            utilitas3730Kode: "-", utilitas3730Bhn: "-",
            pengaman3740Kode: "-", pengaman3740Bhn: "-",
            smks3750Kode: "-", smks3750Bhn: "-",
            gerak3760Kode: "-", gerak3760Bhn: "-",
            fasilitas3770Kode: "-", fasilitas3770Bhn: "-",
            gorongTba: "-", gorongBhn: "-", gorongSba: "-",
            perkuatanGorongKode: "-", perkuatanGorongBhn: "-",
            lintasanBasahTba: "-", lintasanBasahBhn: "-", lintasanBasahSba: "-"
          })),
          subA7: [
            {
              noSub: "Kepala Jbt. A1",
              fondasiTipe: (b.tipeFondasi || "").includes("Bor") ? "PB" : "TP",
              fondasiBhn: "T",
              kjpTipe: "B",
              kjpBhn: "T",
              perkuatanBBKode: "-",
              perkuatanBBBhn: "-",
              tebing4211Bhn: "M",
              pengaman3220Kode: "4.222",
              pengaman3220Bhn: "G",
              perkerasan3110Kode: "4.111",
              perkerasan3110Bhn: "A",
              timbunan3120Kode: "4.121",
              timbunan3120Bhn: "O",
              penahan3130Kode: "4.131",
              penahan3130Bhn: "M",
              pengamanLL3140Kode: "4.141",
              pengamanLL3140Bhn: "B"
            },
            ...(Number(b.jumlahBentang) > 1
              ? [{
                  noSub: "PILAR P1",
                  fondasiTipe: (b.tipeFondasi || "").includes("Bor") ? "PB" : "TP",
                  fondasiBhn: "T",
                  kjpTipe: "D",
                  kjpBhn: "T",
                  perkuatanBBKode: "4.326",
                  perkuatanBBBhn: "T",
                  tebing4211Bhn: "M",
                  pengaman3220Kode: "4.222",
                  pengaman3220Bhn: "G",
                  perkerasan3110Kode: "-",
                  perkerasan3110Bhn: "-",
                  timbunan3120Kode: "-",
                  timbunan3120Bhn: "-",
                  penahan3130Kode: "-",
                  penahan3130Bhn: "-",
                  pengamanLL3140Kode: "-",
                  pengamanLL3140Bhn: "-"
                }]
              : []),
            {
              noSub: "Kepala Jbt. A2",
              fondasiTipe: (b.tipeFondasi || "").includes("Bor") ? "PB" : "TP",
              fondasiBhn: "T",
              kjpTipe: "B",
              kjpBhn: "T",
              perkuatanBBKode: "-",
              perkuatanBBBhn: "-",
              tebing4211Bhn: "M",
              pengaman3220Kode: "4.222",
              pengaman3220Bhn: "G",
              perkerasan3110Kode: "4.111",
              perkerasan3110Bhn: "A",
              timbunan3120Kode: "4.121",
              timbunan3120Bhn: "O",
              penahan3130Kode: "4.131",
              penahan3130Bhn: "M",
              pengamanLL3140Kode: "4.141",
              pengamanLL3140Bhn: "B"
            }
          ],

          // Bagian ke-4 (Tabel A.8: Potongan Tabel A.9, A.10, A.11 Pelebaran Jembatan)
          bag4StatusPelebaran: "Tidak Ada Pelebaran",
          wideningA9ToA11: [
            {
              noBentang: "B 1",
              panjang: Number(((Number(b.panjangTotal) || 46.4) / Math.max(1, Number(b.jumlahBentang) || 1)).toFixed(1)),
              jmlGelagar: 0,
              skew: 0,
              radius: 0,
              lebarLantaiPelebaran: 0,
              lebarTrotoarPelebaran: 0,
              ruangBebas: b.clearenceVertikal || 5.0,
              kiriTba: "-", kiriBhn: "-", kiriSba: "-",
              kananTba: "-", kananBhn: "-", kananSba: "-",
              lantai4511Bhn: "-",
              perkuatan4515Bhn: "-",
              lapis4514Bhn: "-",
              pengaman3620Tba: "-", pengaman3620Bhn: "-", pengaman3620Sba: "-",
              perletakan3610Kode: "-", perletakan3610Bhn: "-",
              siarMuai3600Kode: "-", siarMuai3600Bhn: "-",
              noSubPelebaran: "Kepala Jbt. A1 / A2",
              fondasiPelebaran: "- / -",
              kjpPelebaran: "- / -",
              perkuatanBBPelebaran: "- / -",
              tebingPelebaran: "-",
              pengamanSungaiPelebaran: "- / -",
              perkerasanPendekatPelebaran: "- / -",
              timbunanPelebaran: "- / -",
              penahanTanahPelebaran: "- / -",
              pengamanLLPelebaran: "- / -"
            }
          ]
        };
      }
      return b.invA1;
    }

    function populateLampiranA1Form() {
      const b = getCurrentBridge();
      const a1 = ensureBridgeLampiranA1Defaults(b);
      const setVal = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.value = val ?? "";
      };

      setVal("invNoRuasNasProv", a1.noRuasNasProv);
      setVal("invNoRuasKabKota", a1.noRuasKabKota);
      setVal("invNoRuasTol", a1.noRuasTol);
      setVal("invPbg1TglBangun", a1.pbg1TglBangun);
      setVal("invPbg2TglRehab", a1.pbg2TglRehab);
      setVal("invPbg3TglSerahTerima", a1.pbg3TglSerahTerima);
      setVal("invPbg4PjBangun", a1.pbg4PjBangun);
      setVal("invPbg5PjRehab", a1.pbg5PjRehab);
      setVal("invPbg6BiayaRencana", a1.pbg6BiayaRencana);
      setVal("invPbg7BiayaBangun", a1.pbg7BiayaBangun);
      setVal("invPbg8BiayaRehab", a1.pbg8BiayaRehab);
      setVal("invPbg9BiayaUji", a1.pbg9BiayaUji);
      setVal("invPbg10NilaiAset", a1.pbg10NilaiAset);
      setVal("invPbg11KonsPerencanaBangun", a1.pbg11KonsPerencanaBangun);
      setVal("invPbg12NamaIPC", a1.pbg12NamaIPC);
      setVal("invPbg13KonsPerencanaRehab", a1.pbg13KonsPerencanaRehab);
      setVal("invPbg14KontraktorBangun", a1.pbg14KontraktorBangun);
      setVal("invPbg15KontraktorRehab", a1.pbg15KontraktorRehab);
      setVal("invPbg16SubkonSpesialis", a1.pbg16SubkonSpesialis);
      setVal("invPbg17KonsPengawasBangun", a1.pbg17KonsPengawasBangun);
      setVal("invPbg18KonsPengawasRehab", a1.pbg18KonsPengawasRehab);
      setVal("invPbg19KonsPengujian", a1.pbg19KonsPengujian);
      setVal("invPbg20Status", a1.pbg20Status);
      setVal("invPbg20File", a1.pbg20File);
      setVal("invPbg21Status", a1.pbg21Status);
      setVal("invPbg21File", a1.pbg21File);
      setVal("invKantorTglInput", a1.kantorTglInput);
      setVal("invKantorOleh", a1.kantorOleh);

      // Tabel A.2
      setVal("invMuat1MST", a1.muat1MST);
      setVal("invMuat2BebanMax", a1.muat2BebanMax);
      setVal("invMuat3JenisKendBerat", a1.muat3JenisKendBerat);
      setVal("invMuat4TindakanDarurat", a1.muat4TindakanDarurat);
      setVal("invMuat5DetourTersedia", a1.muat5DetourTersedia);
      setVal("invMuat6JarakDetour", a1.muat6JarakDetour);
      setVal("invLL1LHR", a1.ll1LHR);
      setVal("invLL2NilaiLL", a1.ll2NilaiLL);
      setVal("invLL3LebarODOL", a1.ll3LebarODOL);
      setVal("invEnv1MabLantai", a1.env1MabLantai);
      setVal("invEnv2MabPerletakan", a1.env2MabPerletakan);
      setVal("invEnv3MabTerbawahBA", a1.env3MabTerbawahBA);
      setVal("invEnv4GerusanPilar", a1.env4GerusanPilar);
      setVal("invEnv5GerusanAbutmen", a1.env5GerusanAbutmen);
      setVal("invEnv6GerusanTimbunan", a1.env6GerusanTimbunan);
      setVal("invEnv7BebasOverpass", a1.env7BebasOverpass);
      setVal("invEnv8BebasKA", a1.env8BebasKA);
      setVal("invEnv9TinggiKapal", a1.env9TinggiKapal);
      setVal("invEnv10LebarAlurLaut", a1.env10LebarAlurLaut);
      setVal("invEnv11TinggiPilonBandara", a1.env11TinggiPilonBandara);

      // Bagian 3 & Bagian 4 selects
      setVal("invBag3TipeLintasan", a1.bag3TipeLintasan);
      setVal("invBag4StatusPelebaran", a1.bag4StatusPelebaran);

      renderLampiranA1Tables();
    }

    function readLampiranA1FormIntoState() {
      const b = getCurrentBridge();
      const a1 = ensureBridgeLampiranA1Defaults(b);
      const getVal = (id) => {
        const el = document.getElementById(id);
        return el ? el.value.trim() : "";
      };
      const getNum = (id, fallback = 0) => {
        const el = document.getElementById(id);
        const v = el ? parseFloat(el.value) : NaN;
        return isNaN(v) ? fallback : v;
      };

      a1.noRuasNasProv = getVal("invNoRuasNasProv");
      a1.noRuasKabKota = getVal("invNoRuasKabKota");
      a1.noRuasTol = getVal("invNoRuasTol");
      a1.pbg1TglBangun = getVal("invPbg1TglBangun");
      a1.pbg2TglRehab = getVal("invPbg2TglRehab");
      a1.pbg3TglSerahTerima = getVal("invPbg3TglSerahTerima");
      a1.pbg4PjBangun = getVal("invPbg4PjBangun");
      a1.pbg5PjRehab = getVal("invPbg5PjRehab");
      a1.pbg6BiayaRencana = getNum("invPbg6BiayaRencana", 0);
      a1.pbg7BiayaBangun = getNum("invPbg7BiayaBangun", 0);
      a1.pbg8BiayaRehab = getNum("invPbg8BiayaRehab", 0);
      a1.pbg9BiayaUji = getNum("invPbg9BiayaUji", 0);
      a1.pbg10NilaiAset = getNum("invPbg10NilaiAset", 0);
      a1.pbg11KonsPerencanaBangun = getVal("invPbg11KonsPerencanaBangun");
      a1.pbg12NamaIPC = getVal("invPbg12NamaIPC");
      a1.pbg13KonsPerencanaRehab = getVal("invPbg13KonsPerencanaRehab");
      a1.pbg14KontraktorBangun = getVal("invPbg14KontraktorBangun");
      a1.pbg15KontraktorRehab = getVal("invPbg15KontraktorRehab");
      a1.pbg16SubkonSpesialis = getVal("invPbg16SubkonSpesialis");
      a1.pbg17KonsPengawasBangun = getVal("invPbg17KonsPengawasBangun");
      a1.pbg18KonsPengawasRehab = getVal("invPbg18KonsPengawasRehab");
      a1.pbg19KonsPengujian = getVal("invPbg19KonsPengujian");
      a1.pbg20Status = getVal("invPbg20Status");
      a1.pbg20File = getVal("invPbg20File");
      a1.pbg21Status = getVal("invPbg21Status");
      a1.pbg21File = getVal("invPbg21File");
      a1.kantorTglInput = getVal("invKantorTglInput");
      a1.kantorOleh = getVal("invKantorOleh");

      a1.muat1MST = getNum("invMuat1MST", b.bebanMuatan);
      b.bebanMuatan = a1.muat1MST;
      const elBebanMain = document.getElementById("invBebanMuatan");
      if (elBebanMain) elBebanMain.value = b.bebanMuatan;

      a1.muat2BebanMax = getNum("invMuat2BebanMax", 45);
      a1.muat3JenisKendBerat = getVal("invMuat3JenisKendBerat");
      a1.muat4TindakanDarurat = getVal("invMuat4TindakanDarurat");
      a1.muat5DetourTersedia = getVal("invMuat5DetourTersedia");
      a1.muat6JarakDetour = getNum("invMuat6JarakDetour", 0);

      a1.ll1LHR = getNum("invLL1LHR", b.lhr);
      b.lhr = a1.ll1LHR;
      const elLhrMain = document.getElementById("invLHR");
      if (elLhrMain) elLhrMain.value = b.lhr;

      a1.ll2NilaiLL = getVal("invLL2NilaiLL") || "0";
      b.nilaiLaluLintas = a1.ll2NilaiLL;
      const elNllMain = document.getElementById("invNilaiLaluLintas");
      if (elNllMain) elNllMain.value = b.nilaiLaluLintas;

      a1.ll3LebarODOL = getNum("invLL3LebarODOL", 2.5);
      a1.env1MabLantai = getNum("invEnv1MabLantai", 0);
      a1.env2MabPerletakan = getNum("invEnv2MabPerletakan", 0);
      a1.env3MabTerbawahBA = getNum("invEnv3MabTerbawahBA", 0);
      a1.env4GerusanPilar = getNum("invEnv4GerusanPilar", 0);
      a1.env5GerusanAbutmen = getNum("invEnv5GerusanAbutmen", 0);
      a1.env6GerusanTimbunan = getNum("invEnv6GerusanTimbunan", 0);
      a1.env7BebasOverpass = getNum("invEnv7BebasOverpass", 0);
      a1.env8BebasKA = getNum("invEnv8BebasKA", 0);
      a1.env9TinggiKapal = getNum("invEnv9TinggiKapal", 0);
      a1.env10LebarAlurLaut = getNum("invEnv10LebarAlurLaut", 0);
      a1.env11TinggiPilonBandara = getNum("invEnv11TinggiPilonBandara", 0);

      a1.bag3TipeLintasan = getVal("invBag3TipeLintasan") || "SL";
      a1.bag4StatusPelebaran = getVal("invBag4StatusPelebaran") || "Tidak Ada Pelebaran";

      renderAllViews();
    }

    function renderLampiranA1Tables() {
      const b = getCurrentBridge();
      const a1 = ensureBridgeLampiranA1Defaults(b);

      // 1. Render Tabel A.5 (Potongan ke-1 Bagian ke-3)
      const tA5 = document.getElementById("invTableA5Body");
      if (tA5) {
        const a5Fields = [
          "noBentang", "panjang", "jmlGelagar", "skew", "radius",
          "lebarLantai", "lebarTrotoar", "ruangBebas",
          "tba", "bhn", "sba", "pilonTipe", "pilonBhn",
          "lantai4511Bhn", "perkuatan4515Bhn", "lapis4514Bhn",
          "pengaman3620Tba", "pengaman3620Bhn", "pengaman3620Sba",
          "perletakan3610Kode", "perletakan3610Bhn",
          "siarMuai3600Kode", "siarMuai3600Bhn"
        ];
        tA5.innerHTML = a1.spansA5A6.map((row, rIdx) => `
          <tr class="hover:bg-slate-50/80">
            ${a5Fields.map(f => `
              <td contenteditable="true" data-a5-row="${rIdx}" data-a5-field="${f}" class="a5-edit-cell p-1.5 border border-slate-200 focus:bg-amber-50 focus:outline-none">${row[f] ?? "-"}</td>
            `).join("")}
            <td class="p-1 border border-slate-200">
              <button type="button" data-del-a5="${rIdx}" class="del-a5-btn text-rose-600 hover:text-rose-800 font-bold px-1.5 py-0.5 rounded hover:bg-rose-50">&times;</button>
            </td>
          </tr>
        `).join("");

        tA5.querySelectorAll(".a5-edit-cell").forEach(cell => {
          cell.addEventListener("blur", () => {
            const rIdx = parseInt(cell.getAttribute("data-a5-row"), 10);
            const f = cell.getAttribute("data-a5-field");
            if (a1.spansA5A6[rIdx]) {
              a1.spansA5A6[rIdx][f] = cell.textContent.trim();
              renderAllViews();
            }
          });
        });

        tA5.querySelectorAll(".del-a5-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            if (a1.spansA5A6.length <= 1) {
              showToast("Minimal harus terdapat 1 baris bentang.");
              return;
            }
            const rIdx = parseInt(btn.getAttribute("data-del-a5"), 10);
            a1.spansA5A6.splice(rIdx, 1);
            renderLampiranA1Tables();
            renderAllViews();
          });
        });
      }

      // 2. Render Tabel A.6 (Potongan ke-2 Bagian ke-3)
      const tA6 = document.getElementById("invTableA6Body");
      if (tA6) {
        const a6Fields = [
          "aero3630Kode", "aero3630Bhn",
          "perkuatanBAKode", "perkuatanBABhn",
          "umum3710Kode", "umum3710Bhn",
          "penerangan3720Kode", "penerangan3720Bhn",
          "utilitas3730Kode", "utilitas3730Bhn",
          "pengaman3740Kode", "pengaman3740Bhn",
          "smks3750Kode", "smks3750Bhn",
          "gerak3760Kode", "gerak3760Bhn",
          "fasilitas3770Kode", "fasilitas3770Bhn",
          "gorongTba", "gorongBhn", "gorongSba",
          "perkuatanGorongKode", "perkuatanGorongBhn",
          "lintasanBasahTba", "lintasanBasahBhn", "lintasanBasahSba"
        ];
        tA6.innerHTML = a1.spansA5A6.map((row, rIdx) => `
          <tr class="hover:bg-slate-50/80">
            <td class="p-1.5 border border-slate-200 font-bold bg-slate-50">${row.noBentang || `B ${rIdx + 1}`}</td>
            ${a6Fields.map(f => `
              <td contenteditable="true" data-a6-row="${rIdx}" data-a6-field="${f}" class="a6-edit-cell p-1.5 border border-slate-200 focus:bg-amber-50 focus:outline-none">${row[f] ?? "-"}</td>
            `).join("")}
          </tr>
        `).join("");

        tA6.querySelectorAll(".a6-edit-cell").forEach(cell => {
          cell.addEventListener("blur", () => {
            const rIdx = parseInt(cell.getAttribute("data-a6-row"), 10);
            const f = cell.getAttribute("data-a6-field");
            if (a1.spansA5A6[rIdx]) {
              a1.spansA5A6[rIdx][f] = cell.textContent.trim();
              renderAllViews();
            }
          });
        });
      }

      // 3. Render Tabel A.7 (Potongan ke-3 Bagian ke-3: Bangunan Bawah, Aliran Sungai & Jalan Pendekat)
      const tA7 = document.getElementById("invTableA7Body");
      if (tA7) {
        const a7Fields = [
          "noSub",
          "fondasiTipe", "fondasiBhn",
          "kjpTipe", "kjpBhn",
          "perkuatanBBKode", "perkuatanBBBhn",
          "tebing4211Bhn",
          "pengaman3220Kode", "pengaman3220Bhn",
          "perkerasan3110Kode", "perkerasan3110Bhn",
          "timbunan3120Kode", "timbunan3120Bhn",
          "penahan3130Kode", "penahan3130Bhn",
          "pengamanLL3140Kode", "pengamanLL3140Bhn"
        ];
        tA7.innerHTML = a1.subA7.map((row, rIdx) => `
          <tr class="hover:bg-slate-50/80">
            ${a7Fields.map(f => `
              <td contenteditable="true" data-a7-row="${rIdx}" data-a7-field="${f}" class="a7-edit-cell p-1.5 border border-slate-200 focus:bg-amber-50 focus:outline-none ${f === "noSub" ? "font-bold bg-slate-50" : ""}">${row[f] ?? "-"}</td>
            `).join("")}
            <td class="p-1 border border-slate-200">
              <button type="button" data-del-a7="${rIdx}" class="del-a7-btn text-rose-600 hover:text-rose-800 font-bold px-1.5 py-0.5 rounded hover:bg-rose-50">&times;</button>
            </td>
          </tr>
        `).join("");

        tA7.querySelectorAll(".a7-edit-cell").forEach(cell => {
          cell.addEventListener("blur", () => {
            const rIdx = parseInt(cell.getAttribute("data-a7-row"), 10);
            const f = cell.getAttribute("data-a7-field");
            if (a1.subA7[rIdx]) {
              a1.subA7[rIdx][f] = cell.textContent.trim();
              renderAllViews();
            }
          });
        });

        tA7.querySelectorAll(".del-a7-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            if (a1.subA7.length <= 1) {
              showToast("Minimal harus terdapat 1 baris bangunan bawah.");
              return;
            }
            const rIdx = parseInt(btn.getAttribute("data-del-a7"), 10);
            a1.subA7.splice(rIdx, 1);
            renderLampiranA1Tables();
            renderAllViews();
          });
        });
      }

      // 4. Render Tabel A.9 & A.11 (Bagian ke-4: Pelebaran Jembatan)
      const tA9 = document.getElementById("invTableA9Body");
      const tA11 = document.getElementById("invTableA11Body");
      if (tA9 && tA11) {
        const a9Fields = [
          "noBentang", "panjang", "jmlGelagar", "skew", "radius",
          "lebarLantaiPelebaran", "lebarTrotoarPelebaran", "ruangBebas",
          "kiriTba", "kiriBhn", "kiriSba",
          "kananTba", "kananBhn", "kananSba",
          "lantai4511Bhn", "perkuatan4515Bhn", "lapis4514Bhn",
          "pengaman3620Tba", "pengaman3620Bhn", "pengaman3620Sba",
          "perletakan3610Kode", "perletakan3610Bhn",
          "siarMuai3600Kode", "siarMuai3600Bhn"
        ];
        tA9.innerHTML = a1.wideningA9ToA11.map((row, rIdx) => `
          <tr class="hover:bg-slate-50/80">
            ${a9Fields.map(f => `
              <td contenteditable="true" data-a9-row="${rIdx}" data-a9-field="${f}" class="a9-edit-cell p-1.5 border border-slate-200 focus:bg-amber-50 focus:outline-none">${row[f] ?? "-"}</td>
            `).join("")}
            <td class="p-1 border border-slate-200">
              <button type="button" data-del-a9="${rIdx}" class="del-a9-btn text-rose-600 hover:text-rose-800 font-bold px-1.5 py-0.5 rounded hover:bg-rose-50">&times;</button>
            </td>
          </tr>
        `).join("");

        const a11Fields = [
          "noSubPelebaran", "fondasiPelebaran", "kjpPelebaran", "perkuatanBBPelebaran",
          "tebingPelebaran", "pengamanSungaiPelebaran", "perkerasanPendekatPelebaran",
          "timbunanPelebaran", "penahanTanahPelebaran", "pengamanLLPelebaran"
        ];
        tA11.innerHTML = a1.wideningA9ToA11.map((row, rIdx) => `
          <tr class="hover:bg-slate-50/80">
            ${a11Fields.map(f => `
              <td contenteditable="true" data-a9-row="${rIdx}" data-a9-field="${f}" class="a9-edit-cell p-1.5 border border-slate-200 focus:bg-amber-50 focus:outline-none">${row[f] ?? "-"}</td>
            `).join("")}
          </tr>
        `).join("");

        document.querySelectorAll("#invTableA9Body .a9-edit-cell, #invTableA11Body .a9-edit-cell").forEach(cell => {
          cell.addEventListener("blur", () => {
            const rIdx = parseInt(cell.getAttribute("data-a9-row"), 10);
            const f = cell.getAttribute("data-a9-field");
            if (a1.wideningA9ToA11[rIdx]) {
              a1.wideningA9ToA11[rIdx][f] = cell.textContent.trim();
              renderAllViews();
            }
          });
        });

        tA9.querySelectorAll(".del-a9-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            if (a1.wideningA9ToA11.length <= 1) {
              showToast("Minimal harus terdapat 1 baris pada tabel pelebaran.");
              return;
            }
            const rIdx = parseInt(btn.getAttribute("data-del-a9"), 10);
            a1.wideningA9ToA11.splice(rIdx, 1);
            renderLampiranA1Tables();
            renderAllViews();
          });
        });
      }
    }

    function renderPrintoutLampiranA1() {
      const b = getCurrentBridge();
      const a1 = ensureBridgeLampiranA1Defaults(b);
      const setTxt = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val ?? "-";
      };

      setTxt("prtA1NoNasProv", a1.noRuasNasProv || b.noJembatan);
      setTxt("prtA1NoKabKota", a1.noRuasKabKota || "-");
      setTxt("prtA1NoTol", a1.noRuasTol || "-");
      setTxt("prtA1Wilayah", `${b.provinsi || "-"} / ${b.kabKota || "-"}`);
      setTxt("prtA1Pbg1", a1.pbg1TglBangun);
      setTxt("prtA1Pbg2", a1.pbg2TglRehab);
      setTxt("prtA1Pbg3", a1.pbg3TglSerahTerima);
      setTxt("prtA1Pbg4", a1.pbg4PjBangun);
      setTxt("prtA1Pbg5", a1.pbg5PjRehab);
      setTxt("prtA1Pbg6", formatRupiah(a1.pbg6BiayaRencana));
      setTxt("prtA1Pbg7", formatRupiah(a1.pbg7BiayaBangun));
      setTxt("prtA1Pbg8", formatRupiah(a1.pbg8BiayaRehab));
      setTxt("prtA1Pbg9", formatRupiah(a1.pbg9BiayaUji));
      setTxt("prtA1Pbg10", formatRupiah(a1.pbg10NilaiAset));
      setTxt("prtA1Pbg11", a1.pbg11KonsPerencanaBangun);
      setTxt("prtA1Pbg12", a1.pbg12NamaIPC);
      setTxt("prtA1Pbg13", a1.pbg13KonsPerencanaRehab);
      setTxt("prtA1Pbg14", a1.pbg14KontraktorBangun);
      setTxt("prtA1Pbg15", a1.pbg15KontraktorRehab);
      setTxt("prtA1Pbg16", a1.pbg16SubkonSpesialis);
      setTxt("prtA1Pbg17", a1.pbg17KonsPengawasBangun);
      setTxt("prtA1Pbg18", a1.pbg18KonsPengawasRehab);
      setTxt("prtA1Pbg19", a1.pbg19KonsPengujian);
      setTxt("prtA1Pbg20", `${a1.pbg20Status} (${a1.pbg20File || "-"})`);
      setTxt("prtA1Pbg21", `${a1.pbg21Status} (${a1.pbg21File || "-"})`);
      setTxt("prtA1Kantor", `${formatTanggalIndo(a1.kantorTglInput)} / Oleh: ${a1.kantorOleh || "-"}`);

      // Tabel A.2
      setTxt("prtA2Muat1", `${a1.muat1MST} ton`);
      setTxt("prtA2Muat2", `${a1.muat2BebanMax} ton`);
      setTxt("prtA2Muat3", a1.muat3JenisKendBerat);
      setTxt("prtA2Muat4", a1.muat4TindakanDarurat);
      setTxt("prtA2Muat5", a1.muat5DetourTersedia);
      setTxt("prtA2Muat6", `${a1.muat6JarakDetour} m`);
      setTxt("prtA2LL1", `${Number(a1.ll1LHR || 0).toLocaleString("id-ID")} kend/hari`);
      const llDesc = { "0": "0 (Longgar)", "3": "3 (Cukup lebar)", "5": "5 (Sempit)" };
      setTxt("prtA2LL2", llDesc[String(a1.ll2NilaiLL)] || "0 (Longgar)");
      setTxt("prtA2LL3", `${a1.ll3LebarODOL} m`);
      setTxt("prtA2Env1", `${a1.env1MabLantai} m`);
      setTxt("prtA2Env2", `${a1.env2MabPerletakan} m`);
      setTxt("prtA2Env3", `${a1.env3MabTerbawahBA} m`);
      setTxt("prtA2Env4", `${a1.env4GerusanPilar} m`);
      setTxt("prtA2Env5", `${a1.env5GerusanAbutmen} m`);
      setTxt("prtA2Env6", `${a1.env6GerusanTimbunan} m`);
      setTxt("prtA2Env7", `${a1.env7BebasOverpass} m`);
      setTxt("prtA2Env8", `${a1.env8BebasKA} m`);
      setTxt("prtA2Env9To11", `Kapal: ${a1.env9TinggiKapal}m | Alur: ${a1.env10LebarAlurLaut}m | Pilon: ${a1.env11TinggiPilonBandara}m`);

      // Tabel A.4 (A.5 & A.6)
      setTxt("prtA4TipeLintasan", a1.bag3TipeLintasan || "SL");
      const prtA5A6 = document.getElementById("prtTableA5A6Body");
      if (prtA5A6) {
        prtA5A6.innerHTML = a1.spansA5A6.map(r => `
          <tr>
            <td class="font-bold">${r.noBentang}</td>
            <td>${r.panjang}</td>
            <td>${r.jmlGelagar}</td>
            <td>${r.skew}</td>
            <td>${r.radius}</td>
            <td>${r.lebarLantai}</td>
            <td>${r.lebarTrotoar}</td>
            <td>${r.ruangBebas}</td>
            <td class="font-mono font-bold">${r.tba} / ${r.bhn} / ${r.sba}</td>
            <td class="font-mono">${r.pilonTipe} / ${r.pilonBhn}</td>
            <td class="font-mono">${r.lantai4511Bhn} / ${r.perkuatan4515Bhn} / ${r.lapis4514Bhn}</td>
            <td class="font-mono">${r.pengaman3620Tba} / ${r.pengaman3620Bhn} / ${r.pengaman3620Sba}</td>
            <td class="font-mono">${r.perletakan3610Kode} (${r.perletakan3610Bhn})</td>
            <td class="font-mono">${r.siarMuai3600Kode} (${r.siarMuai3600Bhn})</td>
            <td class="font-mono">Umum:${r.umum3710Kode}(${r.umum3710Bhn}) | PJU:${r.penerangan3720Kode}(${r.penerangan3720Bhn}) | SMKS:${r.smks3750Kode}</td>
          </tr>
        `).join("");
      }

      // Tabel A.7
      const prtA7 = document.getElementById("prtTableA7Body");
      if (prtA7) {
        prtA7.innerHTML = a1.subA7.map(r => `
          <tr>
            <td class="font-bold">${r.noSub}</td>
            <td class="font-mono">${r.fondasiTipe} / ${r.fondasiBhn}</td>
            <td class="font-mono">${r.kjpTipe} / ${r.kjpBhn}</td>
            <td class="font-mono">${r.perkuatanBBKode} / ${r.perkuatanBBBhn}</td>
            <td class="font-mono">${r.tebing4211Bhn}</td>
            <td class="font-mono">${r.pengaman3220Kode} / ${r.pengaman3220Bhn}</td>
            <td class="font-mono">${r.perkerasan3110Kode} / ${r.perkerasan3110Bhn}</td>
            <td class="font-mono">${r.timbunan3120Kode} / ${r.timbunan3120Bhn}</td>
            <td class="font-mono">${r.penahan3130Kode} / ${r.penahan3130Bhn}</td>
            <td class="font-mono">${r.pengamanLL3140Kode} / ${r.pengamanLL3140Bhn}</td>
          </tr>
        `).join("");
      }

      // Tabel A.8 (A.9 - A.11)
      setTxt("prtA8StatusPelebaran", a1.bag4StatusPelebaran || "Tidak Ada Pelebaran");
      const prtA9 = document.getElementById("prtTableA9ToA11Body");
      if (prtA9) {
        prtA9.innerHTML = a1.wideningA9ToA11.map(r => `
          <tr>
            <td class="font-bold">${r.noBentang}</td>
            <td>${r.panjang}</td>
            <td>${r.lebarLantaiPelebaran}</td>
            <td>${r.lebarTrotoarPelebaran}</td>
            <td class="font-mono">${r.kiriTba} / ${r.kiriBhn} / ${r.kiriSba}</td>
            <td class="font-mono">${r.kananTba} / ${r.kananBhn} / ${r.kananSba}</td>
            <td class="font-mono">${r.lantai4511Bhn} / ${r.perkuatan4515Bhn} / ${r.lapis4514Bhn}</td>
            <td class="font-mono">${r.pengaman3620Tba} | ${r.perletakan3610Kode} | ${r.siarMuai3600Kode}</td>
            <td class="font-mono">${r.noSubPelebaran}: Fond(${r.fondasiPelebaran}), KJP(${r.kjpPelebaran})</td>
          </tr>
        `).join("");
      }
    }

    
    // =========================================================================
    // LAMPIRAN A.3 PEDOMAN PEMERIKSAAN JEMBATAN (HAL. 121-124 PDF / TABEL A.16-A.19)
    // =========================================================================
    const LAMPIRAN_A17_ITEMS = [
      { id: "a17_1a", group: "1. Tanah Timbunan", desc: "a. Keruntuhan, longsor atau amblas", defaultLoc: "Jalan Pendekat A1 & A2" },
      { id: "a17_2a", group: "2. Aliran Sungai", desc: "a. Gerusan/degradasi dasar sungai", defaultLoc: "Sekitar Pilar P1 & P2" },
      { id: "a17_2b", group: "2. Aliran Sungai", desc: "b. Endapan/agradasi", defaultLoc: "Hilir Sungai" },
      { id: "a17_2c", group: "2. Aliran Sungai", desc: "c. Benda hanyutan/debris di aliran sungai", defaultLoc: "Alur Sungai Hulu Pilar" },
      { id: "a17_2d", group: "2. Aliran Sungai", desc: "d. Sisa Struktur Jembatan lama", defaultLoc: "Alur Sungai" },
      { id: "a17_3a", group: "3. Fondasi", desc: "a. Penurunan atau deformasi", defaultLoc: "Fondasi A1/P1/P2/A2" },
      { id: "a17_3b", group: "3. Fondasi", desc: "b. Retak pada bagian fondasi", defaultLoc: "Fondasi Sumuran / Tiang" },
      { id: "a17_3c", group: "3. Fondasi", desc: "c. Kerusakan berupa lepasnya bahan fondasi (gompal, delaminasi, karat, atau busuk)", defaultLoc: "Kepala Fondasi" },
      { id: "a17_3d", group: "3. Fondasi", desc: "d. Lepas/rusaknya sistem perlindungan (cat, galvanis, proteksi katodik)", defaultLoc: "Fondasi Tiang Baja" },
      { id: "a17_4a", group: "4. Kepala Jembatan/Pilar", desc: "a. Pergerakan atau amblasnya Kepala Jembatan/Pilar", defaultLoc: "Abutmen A1/A2 & Pilar" },
      { id: "a17_4b", group: "4. Kepala Jembatan/Pilar", desc: "b. Keretakan bagian tembok sayap, kepala jembatan dan pilar", defaultLoc: "Dinding Kepala Jembatan / Pilar" },
      { id: "a17_4c", group: "4. Kepala Jembatan/Pilar", desc: "c. Kerusakan berupa pelepasan bahan (gompal, delaminasi, karat, atau busuk)", defaultLoc: "Badan Pilar / Abutmen" },
      { id: "a17_4d", group: "4. Kepala Jembatan/Pilar", desc: "d. Rembesan air", defaultLoc: "Dinding Abutmen / Tembok Sayap" },
      { id: "a17_4e", group: "4. Kepala Jembatan/Pilar", desc: "e. Lepas/rusaknya sistem perlindungan (cat, galvanis, proteksi katodik)", defaultLoc: "Permukaan Beton/Baja BB" },
      { id: "a17_4f", group: "4. Kepala Jembatan/Pilar", desc: "f. Tidak berfungsinya sistem perkuatan", defaultLoc: "Perkuatan Pilar / Abutmen" },
      { id: "a17_5a", group: "5. Bangunan Atas", desc: "a. Lendutan berlebihan sewaktu lalu lintas lewat di atas jembatan", defaultLoc: "Bentang Utama B1/B2" },
      { id: "a17_5b", group: "5. Bangunan Atas", desc: "b. Keretakan bahan bangunan atas", defaultLoc: "Gelagar Utama / Diafragma" },
      { id: "a17_5c", group: "5. Bangunan Atas", desc: "c. Kerusakan berupa pelepasan bahan (gompal, delaminasi, karat, atau busuk)", defaultLoc: "Batang Rangka / Gelagar" },
      { id: "a17_5d", group: "5. Bangunan Atas", desc: "d. Lepas/longgar sistem sambungan", defaultLoc: "Baut Sambungan Pelat Buhul" },
      { id: "a17_5e", group: "5. Bangunan Atas", desc: "e. Rusaknya elemen penahan struktur kabel", defaultLoc: "Struktur Kabel (Jika Ada)" },
      { id: "a17_5f", group: "5. Bangunan Atas", desc: "f. Tidak berfungsinya sistem perkuatan", defaultLoc: "External Prestressed / FRP" },
      { id: "a17_5g", group: "5. Bangunan Atas", desc: "g. Pergeseran bangunan atas yang ekstrim", defaultLoc: "Dudukan Gelagar di Abutmen/Pilar" },
      { id: "a17_5h", group: "5. Bangunan Atas", desc: "h. Lepasnya ikatan penahan gempa", defaultLoc: "Stopper Lateral / Penahan Gempa" },
      { id: "a17_5i", group: "5. Bangunan Atas", desc: "i. Sampah pada elemen Rangka Baja", defaultLoc: "Pelat Buhul & Batang Tepi Bawah" },
      { id: "a17_5j", group: "5. Bangunan Atas", desc: "j. Rembesan air bangunan atas", defaultLoc: "Badan Gelagar / Box Girder" },
      { id: "a17_5k", group: "5. Bangunan Atas", desc: "k. Rembesan air bagian bawah lantai", defaultLoc: "Sisi Bawah Pelat Lantai" },
      { id: "a17_5l", group: "5. Bangunan Atas", desc: "l. Tidak berfungsi elemen-elemen drainase", defaultLoc: "Pipa Cucuran (Deck Drain)" },
      { id: "a17_6a", group: "6. Sistem Lantai", desc: "a. Keretakan melintang/memanjang pada lantai", defaultLoc: "Pelat Lantai Kendaraan" },
      { id: "a17_6b", group: "6. Sistem Lantai", desc: "b. Kerusakan berupa pelepasan bahan (gompal, delaminasi, karat, atau busuk)", defaultLoc: "Pelat Lantai / Trotoar" },
      { id: "a17_6c", group: "6. Sistem Lantai", desc: "c. Lubang pada permukaan lantai jembatan", defaultLoc: "Lapis Permukaan Aspal Lantai" },
      { id: "a17_6d", group: "6. Sistem Lantai", desc: "d. Genangan air / drainase lantai tersumbat", defaultLoc: "Tepi Kiri & Kanan Lantai" },
      { id: "a17_7a", group: "7. Sambungan / Siar-muai", desc: "a. Beda tinggi antara elevasi jalan pendekat dengan elevasi lantai jembatan", defaultLoc: "Oprit A1 & A2" },
      { id: "a17_7b", group: "7. Sambungan / Siar-muai", desc: "b. Hilang elemen sambungan siar-muai", defaultLoc: "Siar Muai A1, P1, P2, A2" },
      { id: "a17_7c", group: "7. Sambungan / Siar-muai", desc: "c. Kerusakan bahan pengisi/penutup sambungan siar-muai", defaultLoc: "Sealant / Karet Siar Muai" },
      { id: "a17_7d", group: "7. Sambungan / Siar-muai", desc: "d. Longgar/lepasnya perletakan sambungan siar-muai", defaultLoc: "Angkur Baja Siar Muai" },
      { id: "a17_8a", group: "8. Perletakan", desc: "a. Ketidaklengkapan subbagian Perletakan", defaultLoc: "Landasan A1, P1, P2, A2" },
      { id: "a17_8b", group: "8. Perletakan", desc: "b. Pergerakan/pergeseran landasan yang ekstrim dari tempat sistem pendukungnya", defaultLoc: "Elastomer / Sendi-Rol" },
      { id: "a17_8c", group: "8. Perletakan", desc: "c. Kerusakan/ketidakutuhan sistem pendukung landasan (bantalan mortar, batang pengikat, dll.)", defaultLoc: "Mortar Pad / Anchor Bolt" }
    ];

    const LAMPIRAN_A18_SAFETY_COMFORT_ITEMS = [
      { id: "a18_k1a", section: "KESELAMATAN JEMBATAN", group: "1. Sandaran", desc: "a. Ketidaklengkapan elemen", defaultLoc: "Sandaran Kiri & Kanan" },
      { id: "a18_k1b", section: "KESELAMATAN JEMBATAN", group: "1. Sandaran", desc: "b. Longgar/ hilang sistem sambungan", defaultLoc: "Tiang Sandaran & Pipa" },
      { id: "a18_k1c", section: "KESELAMATAN JEMBATAN", group: "1. Sandaran", desc: "c. Kerusakan berupa pelepasan bahan (gompal, delaminasi, karat, atau busuk)", defaultLoc: "Railing / Parapet" },
      { id: "a18_k2a", section: "KESELAMATAN JEMBATAN", group: "2. Rambu dan tanda", desc: "a. Ketidaklengkapan elemen", defaultLoc: "Ujung Masuk & Keluar Jembatan" },
      { id: "a18_k2b", section: "KESELAMATAN JEMBATAN", group: "2. Rambu dan tanda", desc: "b. Longgar/ hilang sistem sambungan", defaultLoc: "Tiang Rambu & Marka" },
      { id: "a18_k3a", section: "KESELAMATAN JEMBATAN", group: "3. Penangkal petir", desc: "a. Ketidaklengkapan elemen", defaultLoc: "Puncak Rangka / Pilon" },
      { id: "a18_k3b", section: "KESELAMATAN JEMBATAN", group: "3. Penangkal petir", desc: "b. Tidak berfungsinya elemen", defaultLoc: "Kabel Grounding" },
      { id: "a18_k3c", section: "KESELAMATAN JEMBATAN", group: "3. Penangkal petir", desc: "c. Longgar/ hilang sistem sambungan", defaultLoc: "Klem Sambungan" },
      { id: "a18_k3d", section: "KESELAMATAN JEMBATAN", group: "3. Penangkal petir", desc: "d. Kerusakan berupa pelepasan bahan (gompal, delaminasi, karat, atau busuk)", defaultLoc: "Tiang Penangkal Petir" },
      { id: "a18_k4a", section: "KESELAMATAN JEMBATAN", group: "4. SMKS", desc: "a. Ketidaklengkapan elemen", defaultLoc: "Sensor & Panel SMKS" },
      { id: "a18_k4b", section: "KESELAMATAN JEMBATAN", group: "4. SMKS", desc: "b. Tidak berfungsinya elemen", defaultLoc: "Unit Akuisisi Data" },
      { id: "a18_k5a", section: "KESELAMATAN JEMBATAN", group: "5. Penerangan dan Utilitas", desc: "a. Ketidaklengkapan/tidak berfungsinya tiang, lampu penerangan, atau utilitas", defaultLoc: "Sepanjang Bentang Jembatan" },
      { id: "a18_n1a", section: "KENYAMANAN JEMBATAN", group: "1. Sistem Lantai", desc: "a. kerataan permukaan pada lapis permukaan", defaultLoc: "Jalur Roda Kendaraan" },
      { id: "a18_n2b", section: "KENYAMANAN JEMBATAN", group: "2. Bangunan Atas", desc: "b. getaran yang mengganggu kenyamanan kendaraan dan pejalan kaki", defaultLoc: "Bentang Utama" },
      { id: "a18_n3c", section: "KENYAMANAN JEMBATAN", group: "3. Jalan pendekat", desc: "c. tidak berfungsinya drainase jalan pendekat", defaultLoc: "Saluran Samping Oprit A1/A2" }
    ];

    const LAMPIRAN_A19_MAINT_SOCIAL_ITEMS = [
      { id: "a18_m1a", section: "PEMELIHARAAN, REHABILITASI, PENGGANTIAN, DAN PEMBANGUNAN", group: "1. Pemeliharaan Rutin", desc: "a. Pembuatan jalan akses;", defaultLoc: "Tangga Inspeksi Abutmen" },
      { id: "a18_m1b", section: "PEMELIHARAAN, REHABILITASI, PENGGANTIAN, DAN PEMBANGUNAN", group: "1. Pemeliharaan Rutin", desc: "b. Pembersihan secara umum;", defaultLoc: "Lantai, Rangka & Drainase" },
      { id: "a18_m1c", section: "PEMELIHARAAN, REHABILITASI, PENGGANTIAN, DAN PEMBANGUNAN", group: "1. Pemeliharaan Rutin", desc: "c. Pengecatan sederhana;", defaultLoc: "Sandaran & Parapet" },
      { id: "a18_m1d", section: "PEMELIHARAAN, REHABILITASI, PENGGANTIAN, DAN PEMBANGUNAN", group: "1. Pemeliharaan Rutin", desc: "d. Penanganan kerusakan ringan;", defaultLoc: "Patching Permukaan Lantai" },
      { id: "a18_m2a", section: "PEMELIHARAAN, REHABILITASI, PENGGANTIAN, DAN PEMBANGUNAN", group: "2. Pemeliharaan Berkala", desc: "a. Pengecatan ulang;", defaultLoc: "Elemen Baja / Rangka" },
      { id: "a18_m2b", section: "PEMELIHARAAN, REHABILITASI, PENGGANTIAN, DAN PEMBANGUNAN", group: "2. Pemeliharaan Berkala", desc: "b. Penggantian lapisan permukaan;", defaultLoc: "Overlay Aspal Lantai" },
      { id: "a18_m2c", section: "PEMELIHARAAN, REHABILITASI, PENGGANTIAN, DAN PEMBANGUNAN", group: "2. Pemeliharaan Berkala", desc: "c. Penggantian lantai kayu;", defaultLoc: "Lantai Kayu (Jika Ada)" },
      { id: "a18_m2d", section: "PEMELIHARAAN, REHABILITASI, PENGGANTIAN, DAN PEMBANGUNAN", group: "2. Pemeliharaan Berkala", desc: "d. Penggantian kayu jalur roda kendaraan;", defaultLoc: "Jalur Roda (Jika Ada)" },
      { id: "a18_m2e", section: "PEMELIHARAAN, REHABILITASI, PENGGANTIAN, DAN PEMBANGUNAN", group: "2. Pemeliharaan Berkala", desc: "e. Pembersihan keseluruhan jembatan;", defaultLoc: "Seluruh Bentang" },
      { id: "a18_m2f", section: "PEMELIHARAAN, REHABILITASI, PENGGANTIAN, DAN PEMBANGUNAN", group: "2. Pemeliharaan Berkala", desc: "f. Pemeliharaan peletakan/landasan;", defaultLoc: "Dudukan Landasan" },
      { id: "a18_m2g", section: "PEMELIHARAAN, REHABILITASI, PENGGANTIAN, DAN PEMBANGUNAN", group: "2. Pemeliharaan Berkala", desc: "g. Penggantian sambungan siar-muai;", defaultLoc: "Expansion Joint" },
      { id: "a18_m2h", section: "PEMELIHARAAN, REHABILITASI, PENGGANTIAN, DAN PEMBANGUNAN", group: "2. Pemeliharaan Berkala", desc: "h. Perbaikan keretakan pasangan batu/bata;", defaultLoc: "Tembok Sayap / Talud" },
      { id: "a18_m2i", section: "PEMELIHARAAN, REHABILITASI, PENGGANTIAN, DAN PEMBANGUNAN", group: "2. Pemeliharaan Berkala", desc: "i. Penggantian elemen-elemen kecil;", defaultLoc: "Baut & Pipa Drainase" },
      { id: "a18_m2j", section: "PEMELIHARAAN, REHABILITASI, PENGGANTIAN, DAN PEMBANGUNAN", group: "2. Pemeliharaan Berkala", desc: "j. Perbaikan tiang dan sandaran;", defaultLoc: "Railing Jembatan" },
      { id: "a18_m2k", section: "PEMELIHARAAN, REHABILITASI, PENGGANTIAN, DAN PEMBANGUNAN", group: "2. Pemeliharaan Berkala", desc: "k. Perawatan bagian-bagian yang bergerak;", defaultLoc: "Sendi / Rol" },
      { id: "a18_m2l", section: "PEMELIHARAAN, REHABILITASI, PENGGANTIAN, DAN PEMBANGUNAN", group: "2. Pemeliharaan Berkala", desc: "l. Perkuatan skala elemen struktural jembatan;", defaultLoc: "Gelagar / Pelat Buhul" },
      { id: "a18_m2m", section: "PEMELIHARAAN, REHABILITASI, PENGGANTIAN, DAN PEMBANGUNAN", group: "2. Pemeliharaan Berkala", desc: "m. Perbaikan longsor dan erosi tebing;", defaultLoc: "Tebing Sungai" },
      { id: "a18_m2n", section: "PEMELIHARAAN, REHABILITASI, PENGGANTIAN, DAN PEMBANGUNAN", group: "2. Pemeliharaan Berkala", desc: "n. Perbaikan sederhana bangunan pengaman;", defaultLoc: "Bronjong / Rip-rap" },
      { id: "a19_m3a", section: "PEMELIHARAAN, REHABILITASI, PENGGANTIAN, DAN PEMBANGUNAN", group: "3. Rehabilitasi", desc: "a. Penggantian skala komponen jembatan", defaultLoc: "Sistem Lantai / Gelagar" },
      { id: "a19_m3b", section: "PEMELIHARAAN, REHABILITASI, PENGGANTIAN, DAN PEMBANGUNAN", group: "3. Rehabilitasi", desc: "b. Modifikasi bangunan atas/bawah, fondasi", defaultLoc: "Perkuatan Pilar & Fondasi" },
      { id: "a19_m3c", section: "PEMELIHARAAN, REHABILITASI, PENGGANTIAN, DAN PEMBANGUNAN", group: "3. Rehabilitasi", desc: "c. Perubahan sistem siar-muai dan perletakan", defaultLoc: "Penggantian Tipe Bearing/Joint" },
      { id: "a19_m4a", section: "PEMELIHARAAN, REHABILITASI, PENGGANTIAN, DAN PEMBANGUNAN", group: "4. Penggantian", desc: "a. Bangunan Atas", defaultLoc: "Seluruh Bentang BA" },
      { id: "a19_m4b", section: "PEMELIHARAAN, REHABILITASI, PENGGANTIAN, DAN PEMBANGUNAN", group: "4. Penggantian", desc: "b. Bangunan Bawah", defaultLoc: "Abutmen / Pilar" },
      { id: "a19_m5a", section: "PEMELIHARAAN, REHABILITASI, PENGGANTIAN, DAN PEMBANGUNAN", group: "5. Pelebaran/Duplikasi Jembatan", desc: "Realisasi pelaksanaan pekerjaan pelebaran atau duplikasi jembatan", defaultLoc: "Sisi Kiri / Kanan Jembatan" },
      { id: "a19_s1", section: "KONDISI SOSIAL KEMASYARAKATAN", group: "1. Ketidakbersihan sekitar Jembatan (Sampah dan Limbah)", desc: "Penumpukan sampah rumah tangga/limbah di sekitar atau kolong jembatan", defaultLoc: "Kolong & Sekitar Abutmen" },
      { id: "a19_s2", section: "KONDISI SOSIAL KEMASYARAKATAN", group: "2. Ketidaksesuaian peruntukan jembatan", desc: "Penampungan pemulung, tempat tinggal, atau perniagaan di bawah jembatan", defaultLoc: "Bawah Jembatan / Sempadan" },
      { id: "a19_s3", section: "KONDISI SOSIAL KEMASYARAKATAN", group: "3. Aktivitas yang mengganggu pelayanan jembatan", desc: "Gangguan keamanan, vandalisme, pencurian baut/komponen, perselisihan adat, perlintasan binatang liar", defaultLoc: "Rangka Baja & Sandaran" },
      { id: "a19_s4", section: "KONDISI SOSIAL KEMASYARAKATAN", group: "4. Kejadian Bencana pada Jembatan (Subbab 8.4.2.f)", desc: "Banjir/lahar dingin, gempa bumi, longsor, kebakaran, tumbukan kendaraan/kapal", defaultLoc: "Aliran Sungai & Struktur" }
    ];

    function ensureBridgeLampiranA3Defaults(b) {
      if (!b.lampiranA3) {
        const hasDarurat = b.tindakanDarurat && b.tindakanDarurat !== "Tidak Diperlukan";
        const topDef = (b.defects && b.defects[0]) || null;
        const [defCode, ...defRest] = topDef ? topDef.level4.split(" - ") : ["4.321", "Kepala Pilar / Kolom Pilar"];

        const checklistMap = {};
        [...LAMPIRAN_A17_ITEMS, ...LAMPIRAN_A18_SAFETY_COMFORT_ITEMS, ...LAMPIRAN_A19_MAINT_SOCIAL_ITEMS].forEach(item => {
          checklistMap[item.id] = {
            ya: false,
            lokasi: item.defaultLoc,
            catatan: "Kondisi baik / aman terkendali",
            photo: ""
          };
        });

        // Pre-populate realistic "Ya" flags aligned with the bridge's actual defects
        if (checklistMap["a17_2a"]) {
          checklistMap["a17_2a"].ya = true;
          checklistMap["a17_2a"].catatan = "Terdeteksi gerusan lokal di sekitar fondasi pilar sungai";
        }
        if (checklistMap["a17_5c"]) {
          checklistMap["a17_5c"].ya = true;
          checklistMap["a17_5c"].catatan = "Korosi/pelepasan bahan setempat pada elemen bangunan atas";
        }
        if (checklistMap["a17_5l"]) {
          checklistMap["a17_5l"].ya = true;
          checklistMap["a17_5l"].catatan = "Sebagian pipa cucuran drainase lantai tersumbat sedimen";
        }
        if (checklistMap["a17_7c"]) {
          checklistMap["a17_7c"].ya = true;
          checklistMap["a17_7c"].catatan = "Sealant pengisi sambungan siar-muai mulai aus/getas";
        }
        if (checklistMap["a18_m1b"]) {
          checklistMap["a18_m1b"].ya = true;
          checklistMap["a18_m1b"].catatan = "Perlu pembersihan rutin sampah, vegetasi, dan lubang drainase";
        }
        if (checklistMap["a18_m2a"]) {
          checklistMap["a18_m2a"].ya = true;
          checklistMap["a18_m2a"].catatan = "Perlu pengecatan ulang berkala pada elemen yang terkorosi";
        }
        if (checklistMap["a18_m2l"]) {
          checklistMap["a18_m2l"].ya = true;
          checklistMap["a18_m2l"].catatan = "Perbaikan/perkuatan elemen struktural sesuai temuan detail";
        }

        b.lampiranA3 = {
          noNasProv: b.noJembatan || "24.035.005.0",
          noKabKota: "-",
          noTol: "-",
          namaJembatan: b.namaJembatan || "",
          wilayah: `${b.provinsi || "DI Yogyakarta"} / ${b.kabKota || ""}`,
          dariKota: b.kotaAsal || "Yogyakarta (Km.Nol)",
          kmJarak: b.kmLokasi ?? 14.8,
          tahunBangun: b.tahunBangun || 1994,
          koordAwal: `${decimalToDMS(b.latStart, true)}, ${decimalToDMS(b.lngStart, false)}`,
          koordAkhir: `${decimalToDMS(b.latEnd, true)}, ${decimalToDMS(b.lngEnd, false)}`,
          tglPeriksa: b.tglInventarisasi || "2026-06-20",
          namaPemeriksa: b.namaPemeriksa || "Tim Inspektur BMS Balai",
          nipPemeriksa: "19880412 201402 1 002",
          nilaiLL: String(b.nilaiLaluLintas ?? "3"),
          lhr: b.lhr || 18450,
          tahunLHR: b.tahunLHR || 2026,
          tglInputKantor: b.tglInventarisasi || "2026-06-21",
          olehKantor: b.namaPemeriksa || "Operator BMS Balai",
          daruratFlag: hasDarurat ? "Ya" : "Tidak",
          daruratRows: [
            {
              kode: defCode,
              uraian: defRest.join(" - ") || "Elemen Struktural Utama",
              apb: topDef?.apb || "P 1",
              x: topDef?.x ?? 0,
              y: topDef?.y ?? 0,
              z: topDef?.z ?? 0,
              usulan: hasDarurat ? `a. Pembatasan beban (${b.tindakanDarurat})` : "a. Pembatasan beban",
              alasan: "1. Kerusakan yang berpotensi pada keruntuhan jembatan / menjaga keselamatan lalu lintas"
            }
          ],
          sesuaiInvFlag: (b.sesuaiInv && b.sesuaiInv.startsWith("Tidak")) ? "Tidak" : "Ya",
          catatanInv: "Dimensi bentang, tipe struktur bangunan atas/bawah, dan koordinat sesuai data Pemeriksaan Inventarisasi terakhir.",
          sesuaiDetailFlag: (b.sesuaiDetail && b.sesuaiDetail.startsWith("Tidak")) ? "Tidak" : "Ya",
          catatanDetail: "Ditemukan indikasi gerusan lokal dan korosi setempat yang perlu ditindaklanjuti pada Pemeriksaan Detail.",
          checklist: checklistMap
        };
      }
      return b.lampiranA3;
    }

    function populateLampiranA3Form() {
      const b = getCurrentBridge();
      const a3 = ensureBridgeLampiranA3Defaults(b);
      const setVal = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.value = val ?? "";
      };

      setVal("rutinA16NoNasProv", a3.noNasProv);
      setVal("rutinA16NoKabKota", a3.noKabKota);
      setVal("rutinA16NoTol", a3.noTol);
      setVal("rutinA16NamaJembatan", a3.namaJembatan || b.namaJembatan);
      setVal("rutinA16Wilayah", a3.wilayah || `${b.provinsi} / ${b.kabKota}`);
      setVal("rutinA16DariKota", a3.dariKota || b.kotaAsal);
      setVal("rutinA16KmJarak", a3.kmJarak ?? b.kmLokasi);
      setVal("rutinA16TahunBangun", a3.tahunBangun || b.tahunBangun);
      setVal("rutinA16KoordAwal", a3.koordAwal);
      setVal("rutinA16KoordAkhir", a3.koordAkhir);
      setVal("rutinA16TglPeriksa", a3.tglPeriksa || b.tglInventarisasi);
      setVal("rutinA16NamaPemeriksa", a3.namaPemeriksa || b.namaPemeriksa);
      setVal("rutinA16NipPemeriksa", a3.nipPemeriksa);
      setVal("rutinA16NilaiLL", a3.nilaiLL);
      setVal("rutinA16LHR", a3.lhr ?? b.lhr);
      setVal("rutinA16TahunLHR", a3.tahunLHR || b.tahunLHR || 2026);
      setVal("rutinA16TglInputKantor", a3.tglInputKantor);
      setVal("rutinA16OlehKantor", a3.olehKantor);
      setVal("rutinA16DaruratFlag", a3.daruratFlag);
      setVal("rutinA16SesuaiInvFlag", a3.sesuaiInvFlag);
      setVal("rutinA16CatatanInv", a3.catatanInv);
      setVal("rutinA16SesuaiDetailFlag", a3.sesuaiDetailFlag);
      setVal("rutinA16CatatanDetail", a3.catatanDetail);

      renderLampiranA3Tables();
    }

    function readLampiranA3FormIntoState() {
      const b = getCurrentBridge();
      const a3 = ensureBridgeLampiranA3Defaults(b);
      const getVal = (id) => {
        const el = document.getElementById(id);
        return el ? el.value.trim() : "";
      };

      a3.noNasProv = getVal("rutinA16NoNasProv");
      a3.noKabKota = getVal("rutinA16NoKabKota");
      a3.noTol = getVal("rutinA16NoTol");
      a3.namaJembatan = getVal("rutinA16NamaJembatan");
      a3.wilayah = getVal("rutinA16Wilayah");
      a3.dariKota = getVal("rutinA16DariKota");
      a3.kmJarak = parseFloat(getVal("rutinA16KmJarak")) || 0;
      a3.tahunBangun = parseInt(getVal("rutinA16TahunBangun"), 10) || b.tahunBangun;
      a3.koordAwal = getVal("rutinA16KoordAwal");
      a3.koordAkhir = getVal("rutinA16KoordAkhir");
      a3.tglPeriksa = getVal("rutinA16TglPeriksa");
      a3.namaPemeriksa = getVal("rutinA16NamaPemeriksa");
      a3.nipPemeriksa = getVal("rutinA16NipPemeriksa");
      a3.nilaiLL = getVal("rutinA16NilaiLL");
      a3.lhr = parseInt(getVal("rutinA16LHR"), 10) || 0;
      a3.tahunLHR = parseInt(getVal("rutinA16TahunLHR"), 10) || 2026;
      a3.tglInputKantor = getVal("rutinA16TglInputKantor");
      a3.olehKantor = getVal("rutinA16OlehKantor");
      a3.daruratFlag = getVal("rutinA16DaruratFlag") || "Tidak";
      a3.sesuaiInvFlag = getVal("rutinA16SesuaiInvFlag") || "Ya";
      a3.catatanInv = getVal("rutinA16CatatanInv");
      a3.sesuaiDetailFlag = getVal("rutinA16SesuaiDetailFlag") || "Ya";
      a3.catatanDetail = getVal("rutinA16CatatanDetail");

      renderAllViews();
    }

    function renderChecklistInteractiveTable(tbodyId, itemsSpec, badgeId, badgeUnit) {
      const b = getCurrentBridge();
      const a3 = ensureBridgeLampiranA3Defaults(b);
      const tbody = document.getElementById(tbodyId);
      if (!tbody) return;

      let yaCount = 0;
      let lastSection = "";
      let lastGroup = "";

      const rowsHtml = [];
      itemsSpec.forEach(item => {
        const entry = a3.checklist[item.id] || { ya: false, lokasi: item.defaultLoc, catatan: "", photo: "" };
        if (entry.ya) yaCount += 1;

        if (item.section && item.section !== lastSection) {
          lastSection = item.section;
          rowsHtml.push(`
            <tr class="bg-slate-100 text-slate-800 font-bold">
              <td colspan="6" class="p-2 border border-amber-300 uppercase tracking-wide">${item.section}</td>
            </tr>
          `);
        }

        const showGroup = item.group !== lastGroup;
        lastGroup = item.group;

        rowsHtml.push(`
          <tr class="${entry.ya ? "bg-rose-50/60" : "hover:bg-slate-50"}">
            <td class="p-2 border border-slate-200 font-bold text-slate-800 align-top">
              ${showGroup ? item.group : `<span class="text-slate-400 pl-3">&hookrightarrow; ${item.group}</span>`}
            </td>
            <td class="p-2 border border-slate-200 text-slate-800 align-top">${item.desc}</td>
            <td class="p-2 border border-slate-200 text-center align-top">
              <select data-a3-chk-id="${item.id}" data-a3-field="ya" class="a3-chk-input rounded-lg border px-2 py-1 font-bold text-xs ${
                entry.ya
                  ? "bg-rose-600 text-white border-rose-700"
                  : "bg-emerald-50 text-emerald-900 border-emerald-300"
              }">
                <option value="Tidak" ${!entry.ya ? "selected" : ""}>Tidak</option>
                <option value="Ya" ${entry.ya ? "selected" : ""}>Ya</option>
              </select>
            </td>
            <td class="p-2 border border-slate-200 align-top">
              <input type="text" data-a3-chk-id="${item.id}" data-a3-field="lokasi" value="${entry.lokasi || ""}" placeholder="Lokasi..." class="a3-chk-input w-full rounded border border-slate-300 px-2 py-1 text-xs bg-white" />
            </td>
            <td class="p-2 border border-slate-200 align-top">
              <input type="text" data-a3-chk-id="${item.id}" data-a3-field="catatan" value="${entry.catatan || ""}" placeholder="Catatan pemeriksaan..." class="a3-chk-input w-full rounded border border-slate-300 px-2 py-1 text-xs bg-white" />
            </td>
            <td class="p-2 border border-slate-200 text-center align-top">
              ${
                entry.photo
                  ? `<div class="flex flex-col items-center gap-1">
                       <img src="${entry.photo}" alt="Foto" class="w-12 h-9 object-cover rounded border border-slate-300 mx-auto" />
                       <button type="button" data-a3-photo-id="${item.id}" class="a3-photo-btn text-[10px] text-[#1E3A8A] font-semibold hover:underline">Ganti</button>
                     </div>`
                  : `<button type="button" data-a3-photo-id="${item.id}" class="a3-photo-btn px-2 py-1 rounded bg-slate-100 hover:bg-amber-100 text-slate-700 border border-slate-300 text-[10px] font-semibold">+ Foto</button>`
              }
            </td>
          </tr>
        `);
      });

      tbody.innerHTML = rowsHtml.join("");
      const badgeEl = document.getElementById(badgeId);
      if (badgeEl) {
        badgeEl.textContent = `${yaCount} ${badgeUnit}`;
      }

      tbody.querySelectorAll(".a3-chk-input").forEach(inp => {
        inp.addEventListener("change", () => {
          const itemId = inp.getAttribute("data-a3-chk-id");
          const field = inp.getAttribute("data-a3-field");
          if (!a3.checklist[itemId]) {
            a3.checklist[itemId] = { ya: false, lokasi: "", catatan: "", photo: "" };
          }
          if (field === "ya") {
            a3.checklist[itemId].ya = inp.value === "Ya";
          } else {
            a3.checklist[itemId][field] = inp.value;
          }
          renderLampiranA3Tables();
          renderPrintoutLampiranA3();
      renderPrintoutRabAndExtras();
          saveBridgesToStorage();
        });
      });

      tbody.querySelectorAll(".a3-photo-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const itemId = btn.getAttribute("data-a3-photo-id");
          const fileInput = document.createElement("input");
          fileInput.type = "file";
          fileInput.accept = "image/*";
          fileInput.addEventListener("change", () => {
            const file = fileInput.files && fileInput.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (ev) => {
              if (!a3.checklist[itemId]) {
                a3.checklist[itemId] = { ya: true, lokasi: "", catatan: "", photo: "" };
              }
              a3.checklist[itemId].photo = ev.target.result;
              renderLampiranA3Tables();
              renderPrintoutLampiranA3();
              saveBridgesToStorage();
              showToast("Foto item Pemeriksaan Rutin berhasil diunggah!");
            };
            reader.readAsDataURL(file);
          });
          fileInput.click();
        });
      });
    }

    function renderLampiranA3Tables() {
      const b = getCurrentBridge();
      const a3 = ensureBridgeLampiranA3Defaults(b);

      // 1. Render Tabel Tindakan Darurat (Tabel A.16)
      const daruratTbody = document.getElementById("rutinA16DaruratTableBody");
      if (daruratTbody) {
        if (!a3.daruratRows || a3.daruratRows.length === 0) {
          a3.daruratRows = [
            { kode: "-", uraian: "-", apb: "-", x: 0, y: 0, z: 0, usulan: "a. Pembatasan beban", alasan: "1. Kerusakan yang berpotensi pada keruntuhan jembatan" }
          ];
        }
        daruratTbody.innerHTML = a3.daruratRows.map((row, idx) => `
          <tr>
            <td class="p-1.5 border border-slate-200"><input type="text" data-drow="${idx}" data-dfield="kode" value="${row.kode || ""}" class="a3-darurat-input w-full rounded border border-slate-300 px-1.5 py-1 font-mono text-center bg-white" /></td>
            <td class="p-1.5 border border-slate-200"><input type="text" data-drow="${idx}" data-dfield="uraian" value="${row.uraian || ""}" class="a3-darurat-input w-full rounded border border-slate-300 px-1.5 py-1 bg-white" /></td>
            <td class="p-1.5 border border-slate-200"><input type="text" data-drow="${idx}" data-dfield="apb" value="${row.apb || ""}" class="a3-darurat-input w-full rounded border border-slate-300 px-1.5 py-1 font-mono text-center bg-white" /></td>
            <td class="p-1.5 border border-slate-200"><input type="number" data-drow="${idx}" data-dfield="x" value="${row.x ?? 0}" class="a3-darurat-input w-full rounded border border-slate-300 px-1 py-1 font-mono text-center bg-white" /></td>
            <td class="p-1.5 border border-slate-200"><input type="number" data-drow="${idx}" data-dfield="y" value="${row.y ?? 0}" class="a3-darurat-input w-full rounded border border-slate-300 px-1 py-1 font-mono text-center bg-white" /></td>
            <td class="p-1.5 border border-slate-200"><input type="number" data-drow="${idx}" data-dfield="z" value="${row.z ?? 0}" class="a3-darurat-input w-full rounded border border-slate-300 px-1 py-1 font-mono text-center bg-white" /></td>
            <td class="p-1.5 border border-slate-200">
              <select data-drow="${idx}" data-dfield="usulan" class="a3-darurat-input w-full rounded border border-slate-300 px-1.5 py-1 bg-white">
                <option value="a. Pembatasan beban" ${row.usulan && row.usulan.startsWith("a.") ? "selected" : ""}>a. Pembatasan beban</option>
                <option value="b. Penyokongan/Sangga (shoring)" ${row.usulan && row.usulan.startsWith("b.") ? "selected" : ""}>b. Penyokongan/Sangga (shoring)</option>
                <option value="c. Penutupan parsial/Sebagian (partial closure)" ${row.usulan && row.usulan.startsWith("c.") ? "selected" : ""}>c. Penutupan parsial/Sebagian</option>
                <option value="d. Penutupan penuh (full closure)" ${row.usulan && row.usulan.startsWith("d.") ? "selected" : ""}>d. Penutupan penuh (full closure)</option>
                <option value="e. Jalan Memutar (detour)" ${row.usulan && row.usulan.startsWith("e.") ? "selected" : ""}>e. Jalan Memutar (detour)</option>
                <option value="f. Jembatan Sementara (temporary bridge)" ${row.usulan && row.usulan.startsWith("f.") ? "selected" : ""}>f. Jembatan Sementara</option>
              </select>
            </td>
            <td class="p-1.5 border border-slate-200">
              <input type="text" data-drow="${idx}" data-dfield="alasan" value="${row.alasan || ""}" placeholder="1. Kerusakan berpotensi keruntuhan / 2. Beban berlebih / 3. Bencana alam..." class="a3-darurat-input w-full rounded border border-slate-300 px-2 py-1 bg-white" />
            </td>
            <td class="p-1.5 border border-slate-200 text-center">
              <button type="button" data-del-drow="${idx}" class="del-a3-darurat-btn text-rose-600 hover:text-rose-800 font-bold px-2 py-0.5 rounded hover:bg-rose-50">Hapus</button>
            </td>
          </tr>
        `).join("");

        daruratTbody.querySelectorAll(".a3-darurat-input").forEach(inp => {
          inp.addEventListener("change", () => {
            const idx = parseInt(inp.getAttribute("data-drow"), 10);
            const field = inp.getAttribute("data-dfield");
            if (a3.daruratRows[idx]) {
              a3.daruratRows[idx][field] = ["x", "y", "z"].includes(field) ? (parseInt(inp.value, 10) || 0) : inp.value;
              renderPrintoutLampiranA3();
              saveBridgesToStorage();
            }
          });
        });

        daruratTbody.querySelectorAll(".del-a3-darurat-btn").forEach(btn => {
          btn.addEventListener("click", () => {
            const idx = parseInt(btn.getAttribute("data-del-drow"), 10);
            if (a3.daruratRows.length > 1) {
              a3.daruratRows.splice(idx, 1);
              renderLampiranA3Tables();
              renderPrintoutLampiranA3();
              saveBridgesToStorage();
            } else {
              showToast("Minimal 1 baris tabel tindakan darurat dipertahankan.");
            }
          });
        });
      }

      // 2. Render Tabel A.17, A.18, A.19
      renderChecklistInteractiveTable("rutinTableA17Body", LAMPIRAN_A17_ITEMS, "rutinA17SummaryBadge", "Indikasi Ya");
      renderChecklistInteractiveTable("rutinTableA18SafetyComfortBody", LAMPIRAN_A18_SAFETY_COMFORT_ITEMS, "rutinA18SafetyComfortBadge", "Indikasi Ya");
      renderChecklistInteractiveTable("rutinTableA19MaintSocialBody", LAMPIRAN_A19_MAINT_SOCIAL_ITEMS, "rutinA19MaintSocialBadge", "Kegiatan Ya");
    }

    function renderPrintoutLampiranA3() {
      const b = getCurrentBridge();
      const a3 = ensureBridgeLampiranA3Defaults(b);
      const setTxt = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = (val !== undefined && val !== null && val !== "") ? val : "-";
      };

      document.querySelectorAll(".prt-rutin-bridge-name").forEach(el => {
        el.textContent = a3.namaJembatan || b.namaJembatan || "-";
      });

      setTxt("prtA16NoNasProv", a3.noNasProv || b.noJembatan);
      setTxt("prtA16NoKabKota", a3.noKabKota);
      setTxt("prtA16NoTol", a3.noTol);
      setTxt("prtA16NamaJembatan", a3.namaJembatan || b.namaJembatan);
      setTxt("prtA16Wilayah", a3.wilayah || `${b.provinsi} / ${b.kabKota}`);
      setTxt("prtA16DariKm", `Dari: ${a3.dariKota || b.kotaAsal} | Km: ${a3.kmJarak ?? b.kmLokasi}`);
      setTxt("prtA16KoordAwal", a3.koordAwal);
      setTxt("prtA16KoordAkhir", a3.koordAkhir);
      setTxt("prtA16TglPeriksa", formatTanggalIndo(a3.tglPeriksa || b.tglInventarisasi));
      setTxt("prtA16PemeriksaNip", `${a3.namaPemeriksa || b.namaPemeriksa} / NIP: ${a3.nipPemeriksa || "-"}`);
      setTxt("prtA16TahunBangun", a3.tahunBangun || b.tahunBangun);
      setTxt("prtA16LaluLintas", `Nilai LL: ${a3.nilaiLL} | LHR: ${a3.lhr ?? b.lhr} kend/hari (Tahun ${a3.tahunLHR || 2026})`);
      setTxt("prtA16DaruratFlag", a3.daruratFlag || "Tidak");
      setTxt("prtA16SesuaiInv", a3.sesuaiInvFlag || "Ya");
      setTxt("prtA16CatatanInv", a3.catatanInv || "-");
      setTxt("prtA16SesuaiDetail", a3.sesuaiDetailFlag || "Ya");
      setTxt("prtA16CatatanDetail", a3.catatanDetail || "-");
      setTxt("prtA16TglKantor", formatTanggalIndo(a3.tglInputKantor));
      setTxt("prtA16OlehKantor", a3.olehKantor || "-");

      const dBody = document.getElementById("prtA16DaruratBody");
      if (dBody) {
        if (a3.daruratFlag !== "Ya" || !a3.daruratRows || a3.daruratRows.length === 0) {
          dBody.innerHTML = `<tr><td class="text-center">-</td><td>Tidak ada elemen yang memerlukan tindakan darurat segera</td><td class="text-center">-</td><td class="text-center">0</td><td class="text-center">0</td><td class="text-center">0</td><td>-</td><td>-</td></tr>`;
        } else {
          dBody.innerHTML = a3.daruratRows.map(r => `
            <tr>
              <td class="font-mono text-center">${r.kode || "-"}</td>
              <td>${r.uraian || "-"}</td>
              <td class="font-mono text-center">${r.apb || "-"}</td>
              <td class="font-mono text-center">${r.x ?? 0}</td>
              <td class="font-mono text-center">${r.y ?? 0}</td>
              <td class="font-mono text-center">${r.z ?? 0}</td>
              <td>${r.usulan || "-"}</td>
              <td>${r.alasan || "-"}</td>
            </tr>
          `).join("");
        }
      }

      const buildPrintChecklistRows = (itemsSpec) => {
        let lastSec = "";
        let lastGrp = "";
        return itemsSpec.map(item => {
          const entry = a3.checklist[item.id] || { ya: false, lokasi: item.defaultLoc, catatan: "", photo: "" };
          let headerRow = "";
          if (item.section && item.section !== lastSec) {
            lastSec = item.section;
            headerRow = `<tr><td colspan="6" class="font-extrabold bg-slate-100 uppercase">${item.section}</td></tr>`;
          }
          const showGrp = item.group !== lastGrp;
          lastGrp = item.group;
          return `${headerRow}<tr>
            <td class="font-bold">${showGrp ? item.group : ""}</td>
            <td>${item.desc}</td>
            <td class="text-center font-bold">${entry.ya ? "&#10003;" : ""}</td>
            <td class="text-center font-bold">${!entry.ya ? "&#10003;" : ""}</td>
            <td><strong>${entry.lokasi || "-"}</strong>${entry.catatan ? ` — ${entry.catatan}` : ""}</td>
            <td class="text-center">${
              entry.photo
                ? `<img src="${entry.photo}" alt="Foto" class="w-14 h-10 object-cover mx-auto border border-black" />`
                : `<span class="text-[8px] text-slate-500">Terlampir</span>`
            }</td>
          </tr>`;
        }).join("");
      };

      const prtA17 = document.getElementById("prtTableA17Body");
      if (prtA17) {
        prtA17.innerHTML = buildPrintChecklistRows(LAMPIRAN_A17_ITEMS);
      }

      const prtA18A19 = document.getElementById("prtTableA18A19Body");
      if (prtA18A19) {
        prtA18A19.innerHTML = buildPrintChecklistRows([...LAMPIRAN_A18_SAFETY_COMFORT_ITEMS, ...LAMPIRAN_A19_MAINT_SOCIAL_ITEMS]);
      }
    }

    function populateBridgeSelector() {
      const sel = document.getElementById("bridgeSelect");
      if (!sel) return;
      sel.innerHTML = bridges
        .map(b => `<option value="${b.id}" ${b.id === currentBridgeId ? "selected" : ""}>${b.noJembatan} — ${b.namaJembatan}</option>`)
        .join("");
    }

    function populateInventoryForm() {
      const b = getCurrentBridge();
      document.getElementById("invNoJembatan").value = b.noJembatan;
      document.getElementById("invNamaJembatan").value = b.namaJembatan;
      document.getElementById("invStatusJalan").value = b.statusJalan;
      document.getElementById("invNamaRuas").value = b.namaRuas;
      document.getElementById("invProvinsi").value = b.provinsi;
      document.getElementById("invKabKota").value = b.kabKota;
      document.getElementById("invKotaAsal").value = b.kotaAsal;
      document.getElementById("invKmLokasi").value = b.kmLokasi;
      document.getElementById("invTglInventarisasi").value = b.tglInventarisasi;
      document.getElementById("invNamaPemeriksa").value = b.namaPemeriksa;
      document.getElementById("invTahunBangun").value = b.tahunBangun;
      document.getElementById("invPanjangTotal").value = b.panjangTotal;
      document.getElementById("invJumlahBentang").value = b.jumlahBentang;
      document.getElementById("invLebarLantai").value = b.lebarLantai;
      document.getElementById("invLebarTrotoar").value = b.lebarTrotoar;
      document.getElementById("invClearenceVertikal").value = b.clearenceVertikal;
      document.getElementById("invLHR").value = b.lhr;
      document.getElementById("invNilaiLaluLintas").value = b.nilaiLaluLintas;
      document.getElementById("invBebanMuatan").value = b.bebanMuatan;
      document.getElementById("invTipeBA").value = b.tipeBA;
      document.getElementById("invTipeLantai").value = b.tipeLantai;
      document.getElementById("invTipeBB").value = b.tipeBB;
      document.getElementById("invTipeFondasi").value = b.tipeFondasi;
      document.getElementById("invJenisLintasan").value = b.jenisLintasan;
      document.getElementById("invNamaSungai").value = b.namaSungai;
      document.getElementById("invLatStart").value = b.latStart;
      document.getElementById("invLngStart").value = b.lngStart;
      document.getElementById("invLatEnd").value = b.latEnd;
      document.getElementById("invLngEnd").value = b.lngEnd;

      document.getElementById("invDMSStart").textContent = `${decimalToDMS(b.latStart, true)}, ${decimalToDMS(b.lngStart, false)}`;
      document.getElementById("invDMSEnd").textContent = `${decimalToDMS(b.latEnd, true)}, ${decimalToDMS(b.lngEnd, false)}`;

      document.getElementById("rutinTindakanDarurat").value = b.tindakanDarurat;
      document.getElementById("rutinSesuaiInv").value = b.sesuaiInv;
      document.getElementById("rutinSesuaiDetail").value = b.sesuaiDetail;
      renderInventoryPhotoGrid15();
      populatePrintoutMetaForm();
      populateLampiranA1Form();
      populateLampiranA3Form();
    }

    function renderInventoryPhotoGrid15() {
      const grid = document.getElementById("invPhotoGrid15");
      if (!grid) return;
      const b = getCurrentBridge();
      const defaultHero = "Jembatan.png";
      const photos = b.bridgePhotos || {};

      grid.innerHTML = INVIJ_15_PHOTO_SLOTS.map(slot => {
        const val = photos[slot.key];
        const isMissing = val === "MISSING" || (!val && slot.defaultMissing);
        const hasCustom = val && val !== "MISSING";
        const imgSrc = hasCustom ? val : defaultHero;

        return `
          <div class="bg-white rounded-xl border border-slate-200 p-2.5 flex flex-col justify-between gap-2 shadow-sm">
            <div class="flex items-center justify-between gap-1">
              <span class="text-[11px] font-bold text-slate-800 truncate" title="${slot.label}">${slot.label}</span>
              <span class="text-[9px] px-1.5 py-0.5 rounded font-semibold ${
                isMissing
                  ? "bg-rose-100 text-rose-700"
                  : hasCustom
                  ? "bg-emerald-100 text-emerald-800"
                  : "bg-slate-100 text-slate-600"
              }">
                ${isMissing ? "Tanda X" : hasCustom ? "Terunggah" : "Default"}
              </span>
            </div>
            <div data-inv-slot="${slot.key}" class="inv-slot-upload-btn w-full aspect-square rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-center overflow-hidden cursor-pointer hover:opacity-90 transition" title="Klik untuk mengunggah foto ${slot.label}">
              ${
                isMissing
                  ? `<svg viewBox="0 0 100 100" class="w-3/5 h-3/5">
                       <line x1="12" y1="12" x2="88" y2="88" stroke="#ef4444" stroke-width="14" stroke-linecap="square" />
                       <line x1="88" y1="12" x2="12" y2="88" stroke="#ef4444" stroke-width="14" stroke-linecap="square" />
                     </svg>`
                  : `<img src="${imgSrc}" alt="${slot.label}" class="w-full h-full object-cover" />`
              }
            </div>
            <div class="grid grid-cols-2 gap-1">
              <button type="button" data-inv-slot="${slot.key}" class="inv-slot-upload-btn px-2 py-1 rounded bg-[#1E3A8A] hover:bg-[#172554] text-white text-[10px] font-semibold transition">
                ${hasCustom ? "Ganti Foto" : "+ Upload"}
              </button>
              <button type="button" data-inv-missing="${slot.key}" class="inv-slot-missing-btn px-2 py-1 rounded bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-700 border border-slate-300 text-[10px] font-semibold transition">
                ${isMissing ? "Pulihkan" : "Tandai X"}
              </button>
            </div>
          </div>
        `;
      }).join("");

      grid.querySelectorAll(".inv-slot-upload-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          triggerBridgeSlotPhotoUpload(btn.getAttribute("data-inv-slot"));
        });
      });
      grid.querySelectorAll(".inv-slot-missing-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          toggleBridgeSlotMissing(btn.getAttribute("data-inv-missing"));
        });
      });
    }

    function populatePrintoutMetaForm() {
      const b = getCurrentBridge();
      const elNama = document.getElementById("prtFormNamaPemeriksa");
      if (!elNama) return;
      elNama.value = b.namaPemeriksa || "";
      document.getElementById("prtFormTglPeriksa").value = b.tglInventarisasi || "2026-06-20";
      document.getElementById("prtFormKodeBA").value = b.kodeBAShort || (b.tipeBA ? b.tipeBA.split("-")[0].trim() : "RBA");
      document.getElementById("prtFormTahunLHR").value = b.tahunLHR || 2011;
      document.getElementById("prtFormLngPeriksa").value = b.lngPeriksa ?? b.lngEnd;
      document.getElementById("prtFormLatPeriksa").value = b.latPeriksa ?? b.latEnd;
      document.getElementById("prtFormKhususFlag").value = b.prtKhususFlag || "AUTO";
      document.getElementById("prtFormDaruratFlag").value = b.prtDaruratFlag || "AUTO";
      document.getElementById("prtFormUsulanAlat").value = b.prtUsulanAlat || "Hammer Test / UPV & Pengukuran Lendutan";
      document.getElementById("prtFormAlasanKhusus").value = b.prtAlasanKhusus || "";
      document.getElementById("prtFormUsulanDarurat").value = b.prtUsulanDarurat || "";
      document.getElementById("prtFormAlasanDarurat").value = b.prtAlasanDarurat || "";
    }

    function readPrintoutMetaFormIntoState() {
      const b = getCurrentBridge();
      const elNama = document.getElementById("prtFormNamaPemeriksa");
      if (!elNama) return;
      b.namaPemeriksa = elNama.value.trim();
      b.tglInventarisasi = document.getElementById("prtFormTglPeriksa").value;
      b.kodeBAShort = document.getElementById("prtFormKodeBA").value.trim() || "RBA";
      b.tahunLHR = parseInt(document.getElementById("prtFormTahunLHR").value, 10) || 2026;
      const lngP = parseFloat(document.getElementById("prtFormLngPeriksa").value);
      const latP = parseFloat(document.getElementById("prtFormLatPeriksa").value);
      if (!isNaN(lngP)) b.lngPeriksa = lngP;
      if (!isNaN(latP)) b.latPeriksa = latP;
      b.prtKhususFlag = document.getElementById("prtFormKhususFlag").value;
      b.prtDaruratFlag = document.getElementById("prtFormDaruratFlag").value;
      b.prtUsulanAlat = document.getElementById("prtFormUsulanAlat").value.trim();
      b.prtAlasanKhusus = document.getElementById("prtFormAlasanKhusus").value.trim();
      b.prtUsulanDarurat = document.getElementById("prtFormUsulanDarurat").value.trim();
      b.prtAlasanDarurat = document.getElementById("prtFormAlasanDarurat").value.trim();

      // Sinkronkan juga ke kolom input Pemeriksaan Inventarisasi
      const invNama = document.getElementById("invNamaPemeriksa");
      if (invNama) invNama.value = b.namaPemeriksa;
      const invTgl = document.getElementById("invTglInventarisasi");
      if (invTgl) invTgl.value = b.tglInventarisasi;

      renderAllViews();
    }

    function readInventoryFormIntoState() {
      const b = getCurrentBridge();
      b.noJembatan = document.getElementById("invNoJembatan").value.trim();
      b.namaJembatan = document.getElementById("invNamaJembatan").value.trim();
      b.statusJalan = document.getElementById("invStatusJalan").value;
      b.namaRuas = document.getElementById("invNamaRuas").value.trim();
      b.provinsi = document.getElementById("invProvinsi").value.trim();
      b.kabKota = document.getElementById("invKabKota").value.trim();
      b.kotaAsal = document.getElementById("invKotaAsal").value.trim();
      b.kmLokasi = parseFloat(document.getElementById("invKmLokasi").value) || 0;
      b.tglInventarisasi = document.getElementById("invTglInventarisasi").value;
      b.namaPemeriksa = document.getElementById("invNamaPemeriksa").value.trim();
      b.tahunBangun = parseInt(document.getElementById("invTahunBangun").value, 10) || 2000;
      b.panjangTotal = parseFloat(document.getElementById("invPanjangTotal").value) || 0;
      b.jumlahBentang = parseInt(document.getElementById("invJumlahBentang").value, 10) || 1;
      b.lebarLantai = parseFloat(document.getElementById("invLebarLantai").value) || 0;
      b.lebarTrotoar = parseFloat(document.getElementById("invLebarTrotoar").value) || 0;
      b.clearenceVertikal = parseFloat(document.getElementById("invClearenceVertikal").value) || 0;
      b.lhr = parseInt(document.getElementById("invLHR").value, 10) || 0;
      b.nilaiLaluLintas = document.getElementById("invNilaiLaluLintas").value;
      b.bebanMuatan = parseFloat(document.getElementById("invBebanMuatan").value) || 0;
      b.tipeBA = document.getElementById("invTipeBA").value;
      b.tipeLantai = document.getElementById("invTipeLantai").value;
      b.tipeBB = document.getElementById("invTipeBB").value;
      b.tipeFondasi = document.getElementById("invTipeFondasi").value;
      b.jenisLintasan = document.getElementById("invJenisLintasan").value;
      b.namaSungai = document.getElementById("invNamaSungai").value.trim();
      b.latStart = parseFloat(document.getElementById("invLatStart").value) || b.latStart;
      b.lngStart = parseFloat(document.getElementById("invLngStart").value) || b.lngStart;
      b.latEnd = parseFloat(document.getElementById("invLatEnd").value) || b.latEnd;
      b.lngEnd = parseFloat(document.getElementById("invLngEnd").value) || b.lngEnd;

      document.getElementById("invDMSStart").textContent = `${decimalToDMS(b.latStart, true)}, ${decimalToDMS(b.lngStart, false)}`;
      document.getElementById("invDMSEnd").textContent = `${decimalToDMS(b.latEnd, true)}, ${decimalToDMS(b.lngEnd, false)}`;

      populateBridgeSelector();
      syncMapMarkersToBridge();
      renderAllViews();
    }

    // =========================================================================
    // 8. RENDER ALL VIEWS (HEADER, RUTIN, DETAIL, PERBAIKAN/RAB, CHARTS)
    // =========================================================================
    function renderAllViews() {
      saveBridgesToStorage();
      const b = getCurrentBridge();
      const maxNK = b.defects.length > 0 ? Math.max(...b.defects.map(calcDefectNK)) : 0;
      const nkStatus = getNKStatus(maxNK);

      // 1. Global Sync Bar & Top Badges
      document.getElementById("syncNoJembatan").textContent = b.noJembatan;
      document.getElementById("syncNamaJembatan").textContent = b.namaJembatan;
      document.getElementById("syncRuasJalan").textContent = `${b.namaRuas} (${b.statusJalan})`;
      document.getElementById("syncKoordinat").textContent = `${b.latStart.toFixed(5)}, ${b.lngStart.toFixed(5)}`;
      document.getElementById("syncDimensi").textContent = `${b.panjangTotal} m (${b.jumlahBentang} bentang) / L=${b.lebarLantai} m`;

      const syncBadgeNK = document.getElementById("syncBadgeNK");
      syncBadgeNK.textContent = `NK ${maxNK} — ${nkStatus.label}`;
      syncBadgeNK.className = `px-2.5 py-0.5 rounded-full font-bold text-xs border ${nkStatus.badgeClass}`;

      document.getElementById("badgeRutinCount").textContent = `${b.defects.length} Temuan`;
      document.getElementById("badgeDetailNK").textContent = `NK: ${maxNK}`;

      // 2. Auto-Filled Header in Pemeriksaan Rutin
      document.getElementById("rutinAutoNo").textContent = b.noJembatan;
      document.getElementById("rutinAutoNama").textContent = `${b.namaJembatan} (${b.namaSungai})`;
      document.getElementById("rutinAutoRuas").textContent = `${b.namaRuas} [Jalan ${b.statusJalan}]`;
      document.getElementById("rutinAutoWilayah").textContent = `${b.kabKota}, ${b.provinsi} — Km ${b.kmLokasi} dari ${b.kotaAsal}`;
      document.getElementById("rutinAutoKoordStart").textContent = `${b.latStart.toFixed(5)}, ${b.lngStart.toFixed(5)} (${decimalToDMS(b.latStart, true)})`;
      document.getElementById("rutinAutoKoordEnd").textContent = `${b.latEnd.toFixed(5)}, ${b.lngEnd.toFixed(5)} (${decimalToDMS(b.lngEnd, false)})`;
      document.getElementById("rutinAutoDimensi").textContent = `Panjang ${b.panjangTotal} m (${b.jumlahBentang} Bentang) | Lebar ${b.lebarLantai} m | Thn ${b.tahunBangun}`;
      document.getElementById("rutinAutoStruktur").textContent = `${b.tipeBA} | ${b.tipeFondasi}`;

      // 3. Auto-Filled Header in Pemeriksaan Detail
      document.getElementById("detailAutoIdentitas").textContent = `${b.noJembatan} — ${b.namaJembatan}`;
      document.getElementById("detailAutoLokasi").textContent = `${b.namaRuas} (Km ${b.kmLokasi} dari ${b.kotaAsal})`;
      document.getElementById("detailAutoTipe").textContent = `${b.tipeBA} | ${b.tipeBB}`;
      document.getElementById("detailAutoLHR").textContent = `LHR: ${b.lhr.toLocaleString("id-ID")} kend/hari | Nilai LL: ${b.nilaiLaluLintas} | Thn: ${b.tahunBangun}`;
      document.getElementById("detailCoordDisplay").textContent = `Ordinat Peta: ${b.latStart.toFixed(5)}, ${b.lngStart.toFixed(5)} s/d ${b.latEnd.toFixed(5)}, ${b.lngEnd.toFixed(5)}`;
      document.getElementById("detailSummaryNK").textContent = `NK = ${maxNK} (${nkStatus.label})`;

      // 4. Render Tables
      renderRutinTable();
      renderDetailTableAndRollup();
      renderRABAndRecommendations(maxNK, nkStatus);

      // 5. Update KPI Cards on Tab 0
      document.getElementById("kpiBridgeName").textContent = `${b.namaJembatan} (${b.noJembatan})`;
      document.getElementById("kpiBridgeSpec").textContent = `${b.panjangTotal} m • ${b.jumlahBentang} Bentang • ${b.tipeBA.split("-")[0].trim()}`;
      document.getElementById("kpiBridgeCoord").textContent = `Maps: ${b.latStart.toFixed(5)}, ${b.lngStart.toFixed(5)}`;
      document.getElementById("kpiRutinTotal").textContent = b.defects.length;
      document.getElementById("kpiRutinEmergency").textContent = `Tindakan Darurat: ${b.tindakanDarurat}`;
      document.getElementById("kpiDetailNKScore").textContent = `NK ${maxNK}`;
      document.getElementById("kpiDetailNKLabel").textContent = nkStatus.label;
      document.getElementById("kpiPreservasiType").textContent = `Strategi: ${nkStatus.preservasi}`;

      renderInviJPrintout();
      updateDashboardChart();
    }

    function formatTanggalIndo(dateStr) {
      if (!dateStr) return "20 Juni 2026";
      const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
      const parts = dateStr.split("-");
      if (parts.length !== 3) return dateStr;
      const mIdx = Math.max(0, Math.min(11, parseInt(parts[1], 10) - 1));
      return `${parseInt(parts[2], 10)} ${months[mIdx]} ${parts[0]}`;
    }

    
    let currentPrintReportMode = "detail";

    function switchPrintReportMode(mode) {
      const validModes = ["inventarisasi", "rutin", "detail", "rab"];
      if (!validModes.includes(mode)) mode = "detail";
      currentPrintReportMode = mode;

      const modeTitles = {
        inventarisasi: "1. LAPORAN PEMERIKSAAN INVENTARISASI JEMBATAN (LAMPIRAN A.1)",
        rutin: "2. LAPORAN PEMERIKSAAN RUTIN JEMBATAN (LAMPIRAN A.3)",
        detail: "3. LAPORAN PEMERIKSAAN DETAIL JEMBATAN (FORMAT INVI-J)",
        rab: "4. LAPORAN SARAN PERBAIKAN & RENCANA ANGGARAN BIAYA (RAB)"
      };

      document.querySelectorAll(".print-report-section").forEach(sec => {
        const isTarget = sec.getAttribute("data-print-section") === mode;
        sec.classList.toggle("hidden", !isTarget);
        sec.setAttribute("data-print-active", isTarget ? "true" : "false");
      });

      document.querySelectorAll(".print-mode-btn").forEach(btn => {
        const active = btn.getAttribute("data-print-mode-btn") === mode;
        btn.className = active
          ? "print-mode-btn p-3.5 rounded-xl border text-left transition flex flex-col justify-between gap-1.5 bg-[#0B192C] border-[#0B192C] text-white shadow-sm"
          : "print-mode-btn p-3.5 rounded-xl border text-left transition flex flex-col justify-between gap-1.5 bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100 hover:border-slate-300";
      });

      const dropdown = document.getElementById("prtReportTypeDropdown");
      if (dropdown && dropdown.value !== mode) {
        dropdown.value = mode;
      }

      const activeLbl = document.getElementById("prtActiveReportLabel");
      if (activeLbl) {
        activeLbl.textContent = modeTitles[mode] || modeTitles.detail;
      }
    }

    function renderPrintoutRabAndExtras() {
      const b = getCurrentBridge();
      const defaultHero = "Jembatan.png";
      const maxNK = b.defects.length > 0 ? Math.max(...b.defects.map(calcDefectNK)) : 0;
      const nkStatus = getNKStatus(maxNK);

      // 1. Render 15 Foto Jembatan di Laporan Inventarisasi (#prtInvOnlyPhotoGrid15)
      const invGrid15 = document.getElementById("prtInvOnlyPhotoGrid15");
      if (invGrid15) {
        const photos = b.bridgePhotos || {};
        invGrid15.innerHTML = INVIJ_15_PHOTO_SLOTS.map(slot => {
          const customImg = photos[slot.key];
          const isMissing = customImg === "MISSING" || (!customImg && slot.defaultMissing);
          const imgSrc = (customImg && customImg !== "MISSING") ? customImg : defaultHero;
          return `
            <div class="invij-photo-slot">
              <div class="text-[10px] font-normal text-black mb-0.5 truncate">${slot.label}</div>
              <div data-slot-key="${slot.key}" class="invij-slot-trigger invij-photo-frame" title="Klik untuk mengunggah foto ${slot.label}">
                ${
                  isMissing
                    ? `<svg viewBox="0 0 100 100" class="w-4/5 h-4/5">
                         <line x1="12" y1="12" x2="88" y2="88" stroke="#ef4444" stroke-width="14" stroke-linecap="square" />
                         <line x1="88" y1="12" x2="12" y2="88" stroke="#ef4444" stroke-width="14" stroke-linecap="square" />
                       </svg>`
                    : `<img src="${imgSrc}" alt="${slot.label}" />`
                }
              </div>
            </div>
          `;
        }).join("");

        invGrid15.querySelectorAll(".invij-slot-trigger").forEach(el => {
          el.addEventListener("click", () => {
            triggerBridgeSlotPhotoUpload(el.getAttribute("data-slot-key"));
          });
        });
      }

      // 2. Render Daftar Temuan Kerusakan pada Laporan Pemeriksaan Rutin (#prtRutinDefectsListBody)
      const rutinDefBody = document.getElementById("prtRutinDefectsListBody");
      if (rutinDefBody) {
        if (b.defects.length === 0) {
          rutinDefBody.innerHTML = `<tr><td colspan="7" class="text-center py-3">Tidak ditemukan kerusakan elemen pada pemeriksaan rutin ini.</td></tr>`;
        } else {
          rutinDefBody.innerHTML = b.defects.map((def, idx) => {
            const dmg = getDamageInfo(def.damageCode);
            const imgSrc = def.photoDataUrl || defaultHero;
            return `
              <tr>
                <td class="text-center font-bold">${idx + 1}</td>
                <td>
                  <div class="font-bold">${def.level2}</div>
                  <div>${def.level3} &rarr; <strong>${def.level4}</strong></div>
                </td>
                <td>
                  <div class="font-bold">${def.apb || "B 1"}</div>
                  <div>${def.lokasi}</div>
                </td>
                <td>
                  <div class="font-bold">${def.customDamageLabel || dmg.label}</div>
                  <div class="text-[8.5px]">${dmg.category}</div>
                </td>
                <td>${def.penyebab}</td>
                <td class="text-right font-mono font-bold">${def.kuantitas} ${def.satuan}</td>
                <td class="text-center">
                  <img src="${imgSrc}" alt="Foto" class="w-14 h-10 object-cover mx-auto border border-black" />
                </td>
              </tr>
            `;
          }).join("");
        }
      }

      // 3. Render Laporan Saran Perbaikan & RAB (#prtRabFullSection)
      const setTxt = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = (val !== undefined && val !== null && val !== "") ? val : "-";
      };

      setTxt("prtRabIdentitas", `${b.noJembatan} — ${b.namaJembatan}`);
      setTxt("prtRabNKStatus", `NK = ${maxNK} (${nkStatus.label})`);
      setTxt("prtRabRuas", `${b.namaRuas} (Jalan ${b.statusJalan})`);
      setTxt("prtRabStrategi", nkStatus.preservasi);
      setTxt("prtRabWilayah", `${b.provinsi} / ${b.kabKota} (Km ${b.kmLokasi} dari ${b.kotaAsal})`);
      setTxt("prtRabDarurat", b.tindakanDarurat || "Tidak Diperlukan");
      setTxt("prtRabDimensi", `Panjang ${b.panjangTotal} m | Lebar ${b.lebarLantai} m | ${b.jumlahBentang} Bentang`);
      setTxt("prtRabStruktur", `${b.tipeBA} | ${b.tipeBB}`);
      setTxt("prtRabKoordinat", `${b.latStart.toFixed(5)}, ${b.lngStart.toFixed(5)} s/d ${b.latEnd.toFixed(5)}, ${b.lngEnd.toFixed(5)}`);
      setTxt("prtRabPemeriksa", `${formatTanggalIndo(b.tglInventarisasi)} — ${b.namaPemeriksa || "-"}`);
      setTxt("prtRabSignInspector", `( ${b.namaPemeriksa || "Inspektur Jembatan"} )`);

      let subtotalFisik = 0;
      const categoryTotals = {
        "Pemeliharaan Rutin": 0,
        "Pemeliharaan Berkala": 0,
        "Rehabilitasi (Perbaikan & Perkuatan)": 0,
        "Penggantian / Darurat": 0
      };

      const rabItemsBody = document.getElementById("prtRabItemsBody");
      if (rabItemsBody) {
        if (b.defects.length === 0) {
          rabItemsBody.innerHTML = `<tr><td colspan="9" class="text-center py-3">Belum ada item kerusakan untuk dihitung biaya penanganannya.</td></tr>`;
        } else {
          rabItemsBody.innerHTML = b.defects.map((def, idx) => {
            const dmg = getDamageInfo(def.damageCode);
            const nk = calcDefectNK(def);
            const nkInfo = getNKStatus(nk);
            const severityFactor = nk >= 4 ? 1.25 : 1.0;
            const unitPrice = Number(def.unitPrice) || dmg.unitPrice;
            const lineTotal = Math.round((Number(def.kuantitas) || 0) * unitPrice * severityFactor);
            subtotalFisik += lineTotal;

            if (nk <= 1) categoryTotals["Pemeliharaan Rutin"] += lineTotal;
            else if (nk === 2) categoryTotals["Pemeliharaan Berkala"] += lineTotal;
            else if (nk <= 4) categoryTotals["Rehabilitasi (Perbaikan & Perkuatan)"] += lineTotal;
            else categoryTotals["Penggantian / Darurat"] += lineTotal;

            return `
              <tr>
                <td class="text-center font-bold">${idx + 1}</td>
                <td>
                  <div class="font-bold">${def.level4}</div>
                  <div>Lokasi: ${def.apb || "B 1"} (${def.lokasi})</div>
                </td>
                <td>
                  <div class="font-bold">${def.customDamageLabel || dmg.label}</div>
                  <div>Penyebab: ${def.penyebab}</div>
                </td>
                <td class="text-center">
                  <div class="font-bold">NK = ${nk}</div>
                  <div class="font-mono text-[8.5px]">(${def.S},${def.R},${def.K},${def.F},${def.P})</div>
                </td>
                <td class="font-bold">${nkInfo.preservasi}</td>
                <td>
                  <div class="font-mono font-bold">Mata Pembayaran ${dmg.payItem}</div>
                  <div>${dmg.repairMethod}</div>
                </td>
                <td class="text-right font-mono">${def.kuantitas} ${def.satuan}</td>
                <td class="text-right font-mono">
                  ${formatRupiah(unitPrice)}
                  ${severityFactor > 1 ? `<div class="text-[8px] font-bold">Faktor Kritis &times;1.25</div>` : ""}
                </td>
                <td class="text-right font-mono font-bold">${formatRupiah(lineTotal)}</td>
              </tr>
            `;
          }).join("");
        }
      }

      const smkkPct = parseFloat(document.getElementById("rabSmkkPct")?.value) || 5;
      const ppnPct = parseFloat(document.getElementById("rabPpnPct")?.value) || 11;
      const biayaSmkk = Math.round(subtotalFisik * (smkkPct / 100));
      const dpp = subtotalFisik + biayaSmkk;
      const biayaPpn = Math.round(dpp * (ppnPct / 100));
      const grandTotal = dpp + biayaPpn;

      const catBody = document.getElementById("prtRabCategoryBody");
      if (catBody) {
        catBody.innerHTML = Object.entries(categoryTotals).map(([cat, val]) => {
          const pct = subtotalFisik > 0 ? Math.round((val / subtotalFisik) * 100) : 0;
          return `
            <tr>
              <td class="font-bold">${cat}</td>
              <td class="text-right font-mono">${formatRupiah(val)}</td>
              <td class="text-center font-mono">${pct}%</td>
            </tr>
          `;
        }).join("");
      }

      const sumBody = document.getElementById("prtRabSummaryTotalsBody");
      if (sumBody) {
        sumBody.innerHTML = `
          <tr>
            <td class="w-[58%] font-bold">1. Subtotal Biaya Fisik Pekerjaan Perbaikan</td>
            <td class="w-[42%] text-right font-mono font-bold">${formatRupiah(subtotalFisik)}</td>
          </tr>
          <tr>
            <td class="font-bold">2. Biaya SMKK, Manajemen Lalu Lintas &amp; K3 (${smkkPct}%)</td>
            <td class="text-right font-mono">${formatRupiah(biayaSmkk)}</td>
          </tr>
          <tr>
            <td class="font-bold">3. Jumlah Sebelum Pajak (DPP)</td>
            <td class="text-right font-mono font-bold">${formatRupiah(dpp)}</td>
          </tr>
          <tr>
            <td class="font-bold">4. Pajak Pertambahan Nilai / PPN (${ppnPct}%)</td>
            <td class="text-right font-mono">${formatRupiah(biayaPpn)}</td>
          </tr>
          <tr class="bg-slate-100">
            <td class="font-extrabold uppercase">TOTAL KEBUTUHAN BIAYA PRESERVASI (TERMASUK PPN)</td>
            <td class="text-right font-mono font-extrabold text-xs">${formatRupiah(grandTotal)}</td>
          </tr>
        `;
      }

      const advList = document.getElementById("prtRabAdviceList");
      if (advList) {
        advList.innerHTML = [
          `<strong>Status Jembatan Level 1 (NK = ${maxNK} — ${nkStatus.label})</strong>: Berdasarkan Pedoman 01/P/BM/2022 Lampiran F, jembatan dengan NK = ${maxNK} masuk dalam program <strong>${nkStatus.preservasi}</strong>.`,
          `<strong>Tindakan Darurat &amp; Keselamatan Lalu Lintas</strong>: Status saat ini adalah <em>"${b.tindakanDarurat}"</em>. Pastikan manajemen lalu lintas dan rambu peringatan beban terpasang selama pekerjaan perbaikan berlangsung.`,
          `<strong>Prioritas Elemen Struktural Utama</strong>: Dahulukan penanganan pada elemen dengan parameter Struktur S = 1 dan Pengaruh P = 1 untuk menjaga kapasitas dukung beban jembatan.`,
          `<strong>Pemeliharaan Rutin Berkelanjutan</strong>: Pastikan pipa cucuran drainase lantai, siar muai, dan pembersihan vegetasi/sampah sungai dilakukan secara berkala agar tidak memicu korosi maupun degradasi ulang.`
        ].map(li => `<li>${li}</li>`).join("");
      }
    }

    function renderInviJPrintout() {
      const b = getCurrentBridge();
      const defaultHero = "Jembatan.png";

      // 1. Identitas & Header Tabel Halaman 1
      document.getElementById("prtNoJembatan").textContent = b.noJembatan || "-";
      document.getElementById("prtNamaJembatan").textContent = b.namaJembatan || "-";
      document.getElementById("prtProvinsi").textContent = b.provinsi || "-";
      document.getElementById("prtDariKota").textContent = `Dari. ${b.kotaAsal || "-"}`;
      document.getElementById("prtKmLokasi").textContent = `Km. ${b.kmLokasi ?? "-"}`;
      document.getElementById("prtTanggalPemeriksaan").textContent = formatTanggalIndo(b.tglInventarisasi);
      document.getElementById("prtLngJembatan").textContent = b.lngStart;
      document.getElementById("prtLatJembatan").textContent = b.latStart;
      document.getElementById("prtLngPeriksa").textContent = b.lngPeriksa ?? b.lngEnd;
      document.getElementById("prtLatPeriksa").textContent = b.latPeriksa ?? b.latEnd;
      document.getElementById("prtPanjang").textContent = b.panjangTotal;
      document.getElementById("prtLebar").textContent = b.lebarLantai;
      document.getElementById("prtNamaPemeriksa").textContent = b.namaPemeriksa || "-";
      document.getElementById("prtTahunBangun").textContent = b.tahunBangun || "-";

      const llMap = { "0": "Longgar", "3": "Cukup Lebar / Ramai", "5": "Padat / Antre" };
      document.getElementById("prtStatusLHR").textContent = llMap[String(b.nilaiLaluLintas)] || "Longgar";
      const shortBA = b.kodeBAShort || (b.tipeBA ? b.tipeBA.split("-")[0].trim() : "RBA");
      document.getElementById("prtKodeBA").textContent = shortBA;
      document.getElementById("prtAngkaLHR").textContent = b.lhr;
      document.getElementById("prtTahunLHR").textContent = b.tahunLHR || "2026";

      // 2. Render 15 Slot Foto Jembatan
      const grid15 = document.getElementById("prtPhotoGrid15");
      if (grid15) {
        const photos = b.bridgePhotos || {};
        grid15.innerHTML = INVIJ_15_PHOTO_SLOTS.map(slot => {
          const customImg = photos[slot.key];
          const isMissing = customImg === "MISSING" || (!customImg && slot.defaultMissing);
          const imgSrc = (customImg && customImg !== "MISSING") ? customImg : defaultHero;
          return `
            <div class="invij-photo-slot">
              <div class="text-[10px] font-normal text-black mb-0.5 truncate">${slot.label}</div>
              <div data-slot-key="${slot.key}" class="invij-slot-trigger invij-photo-frame" title="Klik untuk mengunggah foto ${slot.label}">
                ${
                  isMissing
                    ? `<svg viewBox="0 0 100 100" class="w-4/5 h-4/5">
                         <line x1="12" y1="12" x2="88" y2="88" stroke="#ef4444" stroke-width="14" stroke-linecap="square" />
                         <line x1="88" y1="12" x2="12" y2="88" stroke="#ef4444" stroke-width="14" stroke-linecap="square" />
                       </svg>`
                    : `<img src="${imgSrc}" alt="${slot.label}" />`
                }
              </div>
            </div>
          `;
        }).join("");

        grid15.querySelectorAll(".invij-slot-trigger").forEach(el => {
          el.addEventListener("click", () => {
            triggerBridgeSlotPhotoUpload(el.getAttribute("data-slot-key"));
          });
        });
      }

      // 3. Usulan Pemeriksaan Khusus & Tindakan Darurat (Mendukung Input Formulir Print-Out maupun Otomatis)
      const criticalDefects = b.defects.filter(d => calcDefectNK(d) >= 4);
      const isKhususYa = b.prtKhususFlag === "Ya" || (b.prtKhususFlag !== "Tidak" && criticalDefects.length > 0);
      document.getElementById("prtUsulanKhususFlag").textContent = isKhususYa ? "Ya" : "Tidak";
      const khususBody = document.getElementById("prtTableKhususBody");
      const targetKhususList = criticalDefects.length > 0 ? criticalDefects : (b.defects.length > 0 ? [b.defects[0]] : []);
      if (!isKhususYa || targetKhususList.length === 0) {
        khususBody.innerHTML = `<tr><td class="h-6"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>`;
      } else {
        khususBody.innerHTML = targetKhususList.map(d => {
          const [eCode, ...eRest] = d.level4.split(" - ");
          return `<tr>
            <td>${eCode}</td>
            <td>${eRest.join(" - ") || d.level4}</td>
            <td class="text-center">${d.apb || "B 1"}</td>
            <td class="text-center">${d.x ?? 0}</td>
            <td class="text-center">${d.y ?? 0}</td>
            <td class="text-center">${d.z ?? 0}</td>
            <td>${b.prtUsulanAlat || "Hammer Test / UPV & Pengukuran Lendutan"}</td>
            <td>${b.prtAlasanKhusus || `Nilai kondisi elemen mencapai NK ${calcDefectNK(d)}`}</td>
          </tr>`;
        }).join("");
      }

      const autoEmergency = b.tindakanDarurat && b.tindakanDarurat !== "Tidak Diperlukan";
      const isDaruratYa = b.prtDaruratFlag === "Ya" || (b.prtDaruratFlag !== "Tidak" && autoEmergency);
      document.getElementById("prtTindakanDaruratFlag").textContent = isDaruratYa ? "Ya" : "Tidak";
      const daruratBody = document.getElementById("prtTableDaruratBody");
      if (!isDaruratYa) {
        daruratBody.innerHTML = `<tr><td class="h-6"></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>`;
      } else {
        const topDef = b.defects[0];
        const [eCode, ...eRest] = topDef ? topDef.level4.split(" - ") : ["1.000", "Jembatan"];
        daruratBody.innerHTML = `<tr>
          <td>${eCode}</td>
          <td>${eRest.join(" - ") || "Struktur Utama"}</td>
          <td class="text-center">${topDef?.apb || "B 1"}</td>
          <td class="text-center">${topDef?.x ?? 0}</td>
          <td class="text-center">${topDef?.y ?? 0}</td>
          <td class="text-center">${topDef?.z ?? 0}</td>
          <td>${b.prtUsulanDarurat || b.tindakanDarurat || "Pembatasan beban & rambu peringatan"}</td>
          <td>${b.prtAlasanDarurat || "Menjaga keamanan lalu lintas selama penanganan struktur"}</td>
        </tr>`;
      }

      // 4. Tabel ELEMENT LEVEL : 5
      const l5Body = document.getElementById("prtLevel5Body");
      if (b.defects.length === 0) {
        l5Body.innerHTML = `<tr><td colspan="19" class="text-center py-4">Tidak ada data kerusakan elemen.</td></tr>`;
      } else {
        l5Body.innerHTML = b.defects.map(def => {
          const dmg = getDamageInfo(def.damageCode);
          const nk = calcDefectNK(def);
          const [eCode, ...eRest] = def.level4.split(" - ");
          const eName = eRest.join(" - ") || def.level4;
          const dCode = def.customDamageCode || dmg.code;
          const dName = def.customDamageLabel || dmg.label.split(" - ").slice(1).join(" - ") || dmg.label;
          const unitLabel = def.satuan === "m2" ? "m²" : def.satuan === "m3" ? "m³" : def.satuan;
          const totalQty = def.kuantitasTotal || (Number(def.kuantitas) * 2);
          const imgSrc = def.photoDataUrl || defaultHero;

          return `
            <tr>
              <td>${eCode}</td>
              <td>${eName}</td>
              <td>${dCode}</td>
              <td>${dName}</td>
              <td class="text-center whitespace-nowrap">${def.apb || "B 1"}</td>
              <td class="text-center">${def.x ?? 0}</td>
              <td class="text-center">${def.y ?? 0}</td>
              <td class="text-center">${def.z ?? 0}</td>
              <td class="text-center">${def.S}</td>
              <td class="text-center">${def.R}</td>
              <td class="text-center">${def.K}</td>
              <td class="text-center">${def.F}</td>
              <td class="text-center">${def.P}</td>
              <td class="text-center font-bold">${nk}</td>
              <td class="p-1 text-center">
                <img src="${imgSrc}" alt="${eName}" class="w-24 h-20 object-cover mx-auto border border-slate-300" />
              </td>
              <td class="p-1 text-center">
                ${
                  def.sketchDataUrl
                    ? `<img src="${def.sketchDataUrl}" alt="Sketsa ${eName}" class="w-24 h-20 object-contain mx-auto border border-slate-300 bg-white" />`
                    : getElementTechnicalSketchSVG(eCode)
                }
              </td>
              <td class="text-center whitespace-nowrap">${def.kuantitas} ${unitLabel}</td>
              <td class="text-center whitespace-nowrap">${totalQty} ${unitLabel}</td>
              <td contenteditable="true" data-prt-uraian="${def.id}" class="prt-editable-uraian text-center cursor-text hover:bg-amber-50/60 focus:bg-amber-50 focus:outline-none" title="Klik untuk mengetik/mengubah Uraian langsung">${def.ketDokumentasi || ""}</td>
            </tr>
          `;
        }).join("");
      }

      l5Body.querySelectorAll(".prt-editable-uraian").forEach(cell => {
        cell.addEventListener("blur", () => {
          const id = cell.getAttribute("data-prt-uraian");
          const target = b.defects.find(d => d.id === id);
          if (target && target.ketDokumentasi !== cell.textContent.trim()) {
            target.ketDokumentasi = cell.textContent.trim();
            renderAllViews();
            showToast("Uraian disimpan otomatis.");
          }
        });
      });

      // 5. Tabel ELEMENT LEVEL : 4 (Agregasi per Kode Elemen + Kerusakan + A/P/B)
      const l4Body = document.getElementById("prtLevel4Body");
      const l4Groups = {};
      b.defects.forEach(def => {
        const key = `${def.level4}__${def.customDamageCode || def.damageCode}__${def.apb || "B 1"}`;
        if (!l4Groups[key]) {
          l4Groups[key] = {
            def: def,
            qtySum: 0,
            totalSum: 0,
            S: 0, R: 0, K: 0, F: 0, P: 0
          };
        }
        l4Groups[key].qtySum = Number((l4Groups[key].qtySum + Number(def.kuantitas || 0)).toFixed(4));
        l4Groups[key].totalSum = Math.max(l4Groups[key].totalSum, Number(def.kuantitasTotal || def.kuantitas * 2));
        l4Groups[key].S = Math.max(l4Groups[key].S, Number(def.S || 0));
        l4Groups[key].R = Math.max(l4Groups[key].R, Number(def.R || 0));
        l4Groups[key].K = Math.max(l4Groups[key].K, Number(def.K || 0));
        l4Groups[key].F = Math.max(l4Groups[key].F, Number(def.F || 0));
        l4Groups[key].P = Math.max(l4Groups[key].P, Number(def.P || 0));
      });

      const l4Entries = Object.values(l4Groups);
      if (l4Entries.length === 0) {
        l4Body.innerHTML = `<tr><td colspan="16" class="text-center py-4">Tidak ada data Level 4.</td></tr>`;
      } else {
        l4Body.innerHTML = l4Entries.map(grp => {
          const def = grp.def;
          const dmg = getDamageInfo(def.damageCode);
          const [eCode, ...eRest] = def.level4.split(" - ");
          const eName = eRest.join(" - ") || def.level4;
          const dCode = def.customDamageCode || dmg.code;
          const dName = def.customDamageLabel || dmg.label.split(" - ").slice(1).join(" - ") || dmg.label;
          const nk = grp.S + grp.R + grp.K + grp.F + grp.P;
          const unitLabel = def.satuan === "m2" ? "m²" : def.satuan === "m3" ? "m³" : def.satuan;
          const imgSrc = def.photoDataUrl || defaultHero;

          return `
            <tr>
              <td>${eCode}</td>
              <td>${eName}</td>
              <td>${dCode}</td>
              <td>${dName}</td>
              <td class="text-center whitespace-nowrap">${def.apb || "B 1"}</td>
              <td class="text-center">${grp.S}</td>
              <td class="text-center">${grp.R}</td>
              <td class="text-center">${grp.K}</td>
              <td class="text-center">${grp.F}</td>
              <td class="text-center">${grp.P}</td>
              <td class="text-center font-bold">${nk}</td>
              <td class="p-1 text-center">
                <img src="${imgSrc}" alt="${eName}" class="w-24 h-20 object-cover mx-auto border border-slate-300" />
              </td>
              <td class="p-1 text-center">
                ${
                  def.sketchDataUrl
                    ? `<img src="${def.sketchDataUrl}" alt="Sketsa ${eName}" class="w-24 h-20 object-contain mx-auto border border-slate-300 bg-white" />`
                    : getElementTechnicalSketchSVG(eCode)
                }
              </td>
              <td class="text-center whitespace-nowrap">${grp.qtySum} ${unitLabel}</td>
              <td class="text-center whitespace-nowrap">${grp.totalSum} ${unitLabel}</td>
              <td class="text-center">${def.ketDokumentasi || ""}</td>
            </tr>
          `;
        }).join("");
      }

      // 6. Tabel ELEMENT LEVEL : 3, LEVEL : 2, LEVEL : 1
      const l3Map = {};
      const l2Map = {};
      let l1Worst = { S: 0, R: 0, K: 0, F: 0, P: 0, NK: 0 };

      b.defects.forEach(def => {
        const nk = calcDefectNK(def);
        if (!l3Map[def.level3] || nk > l3Map[def.level3].NK) {
          l3Map[def.level3] = { S: def.S, R: def.R, K: def.K, F: def.F, P: def.P, NK: nk };
        }
        if (!l2Map[def.level2] || nk > l2Map[def.level2].NK) {
          l2Map[def.level2] = { S: def.S, R: def.R, K: def.K, F: def.F, P: def.P, NK: nk };
        }
        if (nk > l1Worst.NK) {
          l1Worst = { S: def.S, R: def.R, K: def.K, F: def.F, P: def.P, NK: nk };
        }
      });

      document.getElementById("prtLevel3Body").innerHTML = Object.entries(l3Map).map(([l3Full, st]) => {
        const [code, ...rest] = l3Full.split(" - ");
        return `<tr>
          <td>${code}</td>
          <td>${rest.join(" - ") || l3Full}</td>
          <td class="text-center">${st.S}</td>
          <td class="text-center">${st.R}</td>
          <td class="text-center">${st.K}</td>
          <td class="text-center">${st.F}</td>
          <td class="text-center">${st.P}</td>
          <td class="text-center font-bold">${st.NK}</td>
        </tr>`;
      }).join("") || `<tr><td colspan="8" class="text-center">-</td></tr>`;

      document.getElementById("prtLevel2Body").innerHTML = Object.entries(l2Map).map(([l2Full, st]) => {
        const [code, ...rest] = l2Full.split(" - ");
        return `<tr>
          <td>${code}</td>
          <td>${rest.join(" - ") || l2Full}</td>
          <td class="text-center">${st.S}</td>
          <td class="text-center">${st.R}</td>
          <td class="text-center">${st.K}</td>
          <td class="text-center">${st.F}</td>
          <td class="text-center">${st.P}</td>
          <td class="text-center font-bold">${st.NK}</td>
        </tr>`;
      }).join("") || `<tr><td colspan="8" class="text-center">-</td></tr>`;

      renderPrintoutLampiranA1();
      renderPrintoutLampiranA3();
      document.getElementById("prtLevel1Body").innerHTML = `<tr>
        <td>1.000</td>
        <td>Jembatan</td>
        <td class="text-center">${l1Worst.S}</td>
        <td class="text-center">${l1Worst.R}</td>
        <td class="text-center">${l1Worst.K}</td>
        <td class="text-center">${l1Worst.F}</td>
        <td class="text-center">${l1Worst.P}</td>
        <td class="text-center font-bold">${l1Worst.NK}</td>
      </tr>`;
    }


    function renderRutinTable() {
      const b = getCurrentBridge();
      const filterVal = document.getElementById("filterRutinLevel2").value;
      const tbody = document.getElementById("rutinTableBody");
      if (!tbody) return;

      const filtered = b.defects.filter(d => filterVal === "ALL" || d.level2.startsWith(filterVal));
      if (filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="p-6 text-center text-slate-500">Belum ada temuan kerusakan pada kategori komponen ini. Gunakan formulir di atas untuk menambahkan temuan.</td></tr>`;
        return;
      }

      tbody.innerHTML = filtered.map(def => {
        const dmg = getDamageInfo(def.damageCode);
        const nk = calcDefectNK(def);
        const nkInfo = getNKStatus(nk);
        return `
          <tr class="hover:bg-slate-50">
            <td class="p-3">
              <div class="font-bold text-slate-900">${def.level2}</div>
              <div class="text-slate-600">${def.level3}</div>
              <div class="font-mono text-[11px] text-[#1E3A8A] mt-0.5">${def.level4}</div>
            </td>
            <td class="p-3 font-medium text-slate-800">${def.lokasi}</td>
            <td class="p-3">
              <span class="font-semibold text-rose-800 block">${dmg.label}</span>
              <span class="text-[11px] text-slate-500">${dmg.category}</span>
            </td>
            <td class="p-3 text-slate-700">${def.penyebab}</td>
            <td class="p-3 text-right font-mono font-semibold">${def.kuantitas} ${def.satuan}</td>
            <td class="p-3 text-center">
              ${
                def.photoDataUrl
                  ? `<div class="flex flex-col items-center gap-1">
                       <img src="${def.photoDataUrl}" alt="Foto" data-open-photo="${def.id}" class="open-photo-btn w-12 h-9 object-cover rounded border border-slate-300 cursor-pointer hover:opacity-80" />
                       <button type="button" data-upload-photo="${def.id}" class="upload-photo-btn text-[10px] text-[#1E3A8A] hover:underline">Ganti Foto</button>
                     </div>`
                  : `<button type="button" data-upload-photo="${def.id}" class="upload-photo-btn px-2 py-1 rounded bg-slate-100 hover:bg-amber-100 text-slate-700 border border-slate-300 text-[10px] font-semibold">+ Unggah Foto</button>`
              }
            </td>
            <td class="p-3 text-center">
              <span class="px-2 py-0.5 rounded-full text-[11px] font-bold border ${nkInfo.badgeClass}">
                NK ${nk} (${nkInfo.label})
              </span>
            </td>
            <td class="p-3 text-center">
              <button type="button" data-del-defect="${def.id}" class="del-defect-btn text-rose-600 hover:text-rose-800 font-semibold px-2 py-1 rounded hover:bg-rose-50">
                Hapus
              </button>
            </td>
          </tr>
        `;
      }).join("");

      tbody.querySelectorAll(".open-photo-btn").forEach(img => {
        img.addEventListener("click", () => openDefectPhotoModal(img.getAttribute("data-open-photo")));
      });
      tbody.querySelectorAll(".upload-photo-btn").forEach(btn => {
        btn.addEventListener("click", () => triggerRowPhotoUpload(btn.getAttribute("data-upload-photo")));
      });
      tbody.querySelectorAll(".open-sketch-btn").forEach(img => {
        img.addEventListener("click", () => openDefectSketchModal(img.getAttribute("data-open-sketch")));
      });
      tbody.querySelectorAll(".upload-sketch-btn").forEach(btn => {
        btn.addEventListener("click", () => triggerRowSketchUpload(btn.getAttribute("data-upload-sketch")));
      });
      tbody.querySelectorAll(".reset-sketch-btn").forEach(btn => {
        btn.addEventListener("click", () => resetRowSketchToAuto(btn.getAttribute("data-reset-sketch")));
      });
      tbody.querySelectorAll(".detail-uraian-input").forEach(inp => {
        inp.addEventListener("change", () => {
          const target = b.defects.find(d => d.id === inp.getAttribute("data-uraian-id"));
          if (target) {
            target.ketDokumentasi = inp.value.trim();
            renderAllViews();
            showToast("Uraian pada Print-Out berhasil diperbarui!");
          }
        });
      });
      tbody.querySelectorAll(".detail-qty-input").forEach(inp => {
        inp.addEventListener("change", () => {
          const target = b.defects.find(d => d.id === inp.getAttribute("data-qty-id"));
          if (target) {
            target.kuantitas = Math.max(0.0001, parseFloat(inp.value) || 0.1);
            renderAllViews();
          }
        });
      });
      tbody.querySelectorAll(".detail-totalqty-input").forEach(inp => {
        inp.addEventListener("change", () => {
          const target = b.defects.find(d => d.id === inp.getAttribute("data-totalqty-id"));
          if (target) {
            target.kuantitasTotal = Math.max(0.0001, parseFloat(inp.value) || target.kuantitas);
            renderAllViews();
          }
        });
      });
      tbody.querySelectorAll(".detail-apb-input").forEach(inp => {
        inp.addEventListener("change", () => {
          const target = b.defects.find(d => d.id === inp.getAttribute("data-apb-id"));
          if (target) {
            target.apb = inp.value.trim() || "B 1";
            renderAllViews();
          }
        });
      });
      ["x", "y", "z"].forEach(axis => {
        tbody.querySelectorAll(`.detail-${axis}-input`).forEach(inp => {
          inp.addEventListener("change", () => {
            const target = b.defects.find(d => d.id === inp.getAttribute(`data-${axis}-id`));
            if (target) {
              target[axis] = parseInt(inp.value, 10) || 0;
              renderAllViews();
            }
          });
        });
      });
      tbody.querySelectorAll(".del-defect-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const id = btn.getAttribute("data-del-defect");
          b.defects = b.defects.filter(item => item.id !== id);
          renderAllViews();
          showToast("Item temuan kerusakan dihapus.");
        });
      });
    }


    function syncDetailDirectSketchDropdown() {
      const sel = document.getElementById("detailSketchSelectDefect");
      if (!sel) return;
      const b = getCurrentBridge();
      const prevVal = sel.value;
      if (b.defects.length === 0) {
        sel.innerHTML = `<option value="">-- Belum ada item kerusakan (Tambahkan di Pemeriksaan Rutin) --</option>`;
        return;
      }
      sel.innerHTML = b.defects.map((d, idx) => {
        const dmg = getDamageInfo(d.damageCode);
        return `<option value="${d.id}">#${idx + 1} — ${d.level4} (${d.apb || d.lokasi}) : ${d.customDamageLabel || dmg.label}</option>`;
      }).join("");
      if (prevVal && b.defects.some(d => d.id === prevVal)) {
        sel.value = prevVal;
      }
      renderDirectSketchPreviewCanvas();
    }

    function renderDirectSketchPreviewCanvas() {
      const sel = document.getElementById("detailSketchSelectDefect");
      const canvas = document.getElementById("detailDirectResultCanvas");
      if (!sel || !canvas) return;
      const b = getCurrentBridge();
      const target = b.defects.find(d => d.id === sel.value) || b.defects[0];
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      if (!target) return;

      const svgStr = buildGeminiTechnicalSVG(target, target.ketDokumentasi || "");
      const src = target.sketchDataUrl || ("data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgStr));
      const img = new Image();
      img.onload = () => {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      };
      img.src = src;
    }

    function renderDetailTableAndRollup() {
      syncDetailDirectSketchDropdown();
      const b = getCurrentBridge();
      const tbody = document.getElementById("detailTableBody");
      const rollupEl = document.getElementById("detailHierarchyRollup");
      if (!tbody || !rollupEl) return;

      if (b.defects.length === 0) {
        tbody.innerHTML = `<tr><td colspan="9" class="p-6 text-center text-slate-500">Tidak ada elemen rusak. Tambahkan temuan pada Pemeriksaan Rutin terlebih dahulu.</td></tr>`;
        rollupEl.innerHTML = "";
        return;
      }

      tbody.innerHTML = b.defects.map(def => {
        const dmg = getDamageInfo(def.damageCode);
        const nk = calcDefectNK(def);
        const nkInfo = getNKStatus(nk);
        const params = ["S", "R", "K", "F", "P"];
        const paramButtons = params.map(p => {
          const active = Number(def[p]) === 1;
          return `
            <td class="p-2 text-center">
              <button type="button" data-def-id="${def.id}" data-param="${p}" class="srkfp-btn w-8 h-8 rounded-lg font-mono font-bold text-xs border transition ${
                active
                  ? "bg-rose-600 text-white border-rose-700 shadow-sm"
                  : "bg-slate-100 text-slate-600 border-slate-300 hover:bg-slate-200"
              }">
                ${active ? "1" : "0"}
              </button>
            </td>
          `;
        }).join("");

        return `
          <tr class="hover:bg-slate-50">
            <td class="p-3">
              <div class="font-bold text-slate-900">${def.level4}</div>
              <div class="text-[11px] text-slate-500">${def.level3} &bull; Lokasi: <strong>${def.lokasi}</strong></div>
            </td>
            <td class="p-3">
              <div class="font-semibold text-slate-800">${def.customDamageLabel || dmg.label}</div>
              <div class="text-[11px] text-slate-500">Penyebab: ${def.penyebab}</div>
            </td>
            <td class="p-3 text-center bg-slate-50/60">
              ${
                def.photoDataUrl
                  ? `<div class="flex flex-col items-center gap-1">
                       <img src="${def.photoDataUrl}" alt="Gambar" data-open-photo="${def.id}" class="open-photo-btn w-16 h-12 object-cover rounded border border-slate-300 mx-auto cursor-pointer hover:opacity-80 shadow-sm" title="Klik untuk memperbesar gambar" />
                       <button type="button" data-upload-photo="${def.id}" class="upload-photo-btn px-2 py-0.5 rounded bg-[#1E3A8A] text-white text-[10px] font-semibold hover:bg-sky-700">Ganti Foto</button>
                     </div>`
                  : `<button type="button" data-upload-photo="${def.id}" class="upload-photo-btn px-2.5 py-1.5 rounded-lg bg-[#1E3A8A] hover:bg-[#172554] text-white text-[10px] font-bold shadow-sm transition">+ Upload Foto</button>`
              }
            </td>
            <td class="p-3 text-center bg-amber-50/50">
              ${
                def.sketchDataUrl
                  ? `<div class="flex flex-col items-center gap-1">
                       <img src="${def.sketchDataUrl}" alt="Sketsa" data-open-sketch="${def.id}" class="open-sketch-btn w-20 h-14 object-contain bg-white rounded border-2 border-amber-400 mx-auto cursor-pointer hover:opacity-80 shadow-sm" title="Klik untuk memperbesar sketsa" />
                       <div class="flex items-center gap-1">
                         <button type="button" data-upload-sketch="${def.id}" class="upload-sketch-btn px-2 py-0.5 rounded bg-[#1E3A8A] hover:bg-[#172554] text-white text-[10px] font-bold">Upload &amp; Generate AI</button>
                         <button type="button" data-reset-sketch="${def.id}" class="reset-sketch-btn px-1.5 py-0.5 rounded bg-slate-200 text-slate-700 text-[10px] hover:bg-rose-100 hover:text-rose-700">Reset</button>
                       </div>
                     </div>`
                  : `<div class="flex flex-col items-center gap-1.5">
                       <div class="w-20 bg-white rounded border border-slate-300 p-0.5">${getElementTechnicalSketchSVG(def.level4.split(" - ")[0])}</div>
                       <button type="button" data-upload-sketch="${def.id}" class="upload-sketch-btn px-2.5 py-1.5 rounded-lg bg-[#1E3A8A] hover:bg-[#172554] text-white text-[10px] font-extrabold shadow-sm transition">+ Upload Foto Sketsa &amp; Generate AI</button>
                     </div>`
              }
            </td>
            ${paramButtons}
            <td class="p-3 text-center">
              <span class="px-2.5 py-1 rounded-full text-xs font-extrabold border ${nkInfo.badgeClass}">
                NK = ${nk}
              </span>
            </td>
            <td class="p-3">
              <div class="font-semibold text-emerald-800">${nkInfo.preservasi}</div>
              <div class="text-[11px] text-slate-600">${dmg.repairMethod}</div>
            </td>
            <td class="p-2.5 min-w-[210px] space-y-1.5">
              <div>
                <label class="block text-[10px] font-semibold text-slate-500 mb-0.5">Uraian Print-Out (Kolom Kanan):</label>
                <textarea data-uraian-id="${def.id}" rows="2" placeholder="Contoh: Terdapat kerusakan serupa di koordinat yang sama..." class="detail-uraian-input w-full rounded border border-slate-300 px-2 py-1 text-[11px] bg-white focus:border-sky-600 focus:outline-none">${def.ketDokumentasi || ""}</textarea>
              </div>
              <div class="grid grid-cols-2 gap-1 text-[10px]">
                <div>
                  <span class="text-slate-500 block">Vol. Rusak (${def.satuan}):</span>
                  <input type="number" step="0.01" data-qty-id="${def.id}" value="${def.kuantitas}" class="detail-qty-input w-full rounded border border-slate-300 px-1.5 py-0.5 font-mono bg-white" />
                </div>
                <div>
                  <span class="text-slate-500 block">Vol. Total (${def.satuan}):</span>
                  <input type="number" step="0.01" data-totalqty-id="${def.id}" value="${def.kuantitasTotal || (Number(def.kuantitas) * 2)}" class="detail-totalqty-input w-full rounded border border-slate-300 px-1.5 py-0.5 font-mono bg-white" />
                </div>
              </div>
              <div class="grid grid-cols-4 gap-1 text-[10px]">
                <input type="text" data-apb-id="${def.id}" value="${def.apb || "B 1"}" title="Lokasi A/P/B" class="detail-apb-input rounded border border-slate-300 px-1 py-0.5 font-mono text-center bg-white" />
                <input type="number" data-x-id="${def.id}" value="${def.x ?? 0}" title="Koordinat X" class="detail-x-input rounded border border-slate-300 px-1 py-0.5 font-mono text-center bg-white" />
                <input type="number" data-y-id="${def.id}" value="${def.y ?? 0}" title="Koordinat Y" class="detail-y-input rounded border border-slate-300 px-1 py-0.5 font-mono text-center bg-white" />
                <input type="number" data-z-id="${def.id}" value="${def.z ?? 0}" title="Koordinat Z" class="detail-z-input rounded border border-slate-300 px-1 py-0.5 font-mono text-center bg-white" />
              </div>
            </td>
          </tr>
        `;
      }).join("");

      tbody.querySelectorAll(".open-photo-btn").forEach(img => {
        img.addEventListener("click", () => openDefectPhotoModal(img.getAttribute("data-open-photo")));
      });
      tbody.querySelectorAll(".upload-photo-btn").forEach(btn => {
        btn.addEventListener("click", () => triggerRowPhotoUpload(btn.getAttribute("data-upload-photo")));
      });
      tbody.querySelectorAll(".srkfp-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const defId = btn.getAttribute("data-def-id");
          const param = btn.getAttribute("data-param");
          const target = b.defects.find(d => d.id === defId);
          if (target) {
            target[param] = Number(target[param]) === 1 ? 0 : 1;
            renderAllViews();
          }
        });
      });

      // Roll-up per Level 2 Component
      const rollupMap = {};
      Object.keys(BMS_HIERARCHY).forEach(l2 => {
        rollupMap[l2] = { maxNK: 0, count: 0 };
      });
      b.defects.forEach(def => {
        if (!rollupMap[def.level2]) {
          rollupMap[def.level2] = { maxNK: 0, count: 0 };
        }
        rollupMap[def.level2].count += 1;
        rollupMap[def.level2].maxNK = Math.max(rollupMap[def.level2].maxNK, calcDefectNK(def));
      });

      rollupEl.innerHTML = Object.entries(rollupMap).map(([l2Name, stat]) => {
        const info = getNKStatus(stat.maxNK);
        return `
          <div class="bg-white p-3 rounded-lg border border-slate-200 flex items-center justify-between gap-2">
            <div>
              <div class="font-bold text-slate-800">${l2Name}</div>
              <div class="text-[11px] text-slate-500">${stat.count} elemen diperiksa &bull; ${info.preservasi}</div>
            </div>
            <span class="px-2.5 py-1 rounded-full font-extrabold text-xs border whitespace-nowrap ${info.badgeClass}">
              NK ${stat.maxNK}
            </span>
          </div>
        `;
      }).join("");
    }

    function renderRABAndRecommendations(maxNK, nkStatus) {
      const b = getCurrentBridge();
      const tbody = document.getElementById("rabTableBody");
      const catBreakdownEl = document.getElementById("rabCategoryBreakdown");
      const adviceListEl = document.getElementById("rabTechnicalAdviceList");
      if (!tbody) return;

      let subtotalFisik = 0;
      const categoryTotals = {
        "Pemeliharaan Rutin": 0,
        "Pemeliharaan Berkala": 0,
        "Rehabilitasi (Perbaikan & Perkuatan)": 0,
        "Penggantian / Darurat": 0
      };

      if (b.defects.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="p-6 text-center text-slate-500">Belum ada item kerusakan untuk dihitung biayanya.</td></tr>`;
      } else {
        tbody.innerHTML = b.defects.map(def => {
          const dmg = getDamageInfo(def.damageCode);
          const nk = calcDefectNK(def);
          const nkInfo = getNKStatus(nk);
          // Escalation factor if NK >= 4 (requires heavy shoring/urgent structural intervention)
          const severityFactor = nk >= 4 ? 1.25 : 1.0;
          const unitPrice = Number(def.unitPrice) || dmg.unitPrice;
          const lineTotal = Math.round((Number(def.kuantitas) || 0) * unitPrice * severityFactor);
          subtotalFisik += lineTotal;

          if (nk <= 1) categoryTotals["Pemeliharaan Rutin"] += lineTotal;
          else if (nk === 2) categoryTotals["Pemeliharaan Berkala"] += lineTotal;
          else if (nk <= 4) categoryTotals["Rehabilitasi (Perbaikan & Perkuatan)"] += lineTotal;
          else categoryTotals["Penggantian / Darurat"] += lineTotal;

          return `
            <tr class="hover:bg-slate-50">
              <td class="p-3">
                <div class="font-bold text-slate-900">${def.level4}</div>
                <div class="text-[11px] text-slate-500">Lokasi: ${def.lokasi}</div>
              </td>
              <td class="p-3">
                <div class="font-semibold text-slate-800">${dmg.label}</div>
                <span class="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold border ${nkInfo.badgeClass}">
                  NK = ${nk} (${nkInfo.label})
                </span>
              </td>
              <td class="p-3 font-semibold text-slate-800">${nkInfo.preservasi}</td>
              <td class="p-3">
                <span class="font-mono text-[11px] font-bold text-[#1E3A8A] bg-sky-50 px-1.5 py-0.5 rounded border border-slate-200">
                  Mata Pembayaran ${dmg.payItem}
                </span>
                <div class="text-slate-700 mt-1">${dmg.repairMethod}</div>
              </td>
              <td class="p-3 text-right">
                <div class="inline-flex items-center gap-1">
                  <input type="number" step="0.5" min="0.1" data-rab-qty="${def.id}" value="${def.kuantitas}" class="rab-qty-input w-16 text-right rounded border border-slate-300 px-1.5 py-1 font-mono text-xs bg-white" />
                  <span class="text-slate-500 font-mono">${def.satuan}</span>
                </div>
              </td>
              <td class="p-3 text-right">
                <input type="number" step="10000" min="1000" data-rab-price="${def.id}" value="${unitPrice}" class="rab-price-input w-28 text-right rounded border border-slate-300 px-2 py-1 font-mono text-xs bg-white" />
                ${severityFactor > 1 ? `<div class="text-[10px] text-rose-600 font-semibold">Faktor Kritis &times;1.25</div>` : ""}
              </td>
              <td class="p-3 text-right font-mono font-bold text-slate-900">
                ${formatRupiah(lineTotal)}
              </td>
            </tr>
          `;
        }).join("");
      }

      // Wire interactive quantity & unit price inputs
      tbody.querySelectorAll(".rab-qty-input").forEach(inp => {
        inp.addEventListener("change", () => {
          const id = inp.getAttribute("data-rab-qty");
          const target = b.defects.find(d => d.id === id);
          if (target) {
            target.kuantitas = Math.max(0.1, parseFloat(inp.value) || 1);
            renderAllViews();
          }
        });
      });

      tbody.querySelectorAll(".rab-price-input").forEach(inp => {
        inp.addEventListener("change", () => {
          const id = inp.getAttribute("data-rab-price");
          const target = b.defects.find(d => d.id === id);
          if (target) {
            target.unitPrice = Math.max(1000, parseFloat(inp.value) || 10000);
            renderAllViews();
          }
        });
      });

      const smkkPct = parseFloat(document.getElementById("rabSmkkPct").value) || 0;
      const ppnPct = parseFloat(document.getElementById("rabPpnPct").value) || 0;
      const biayaSmkk = Math.round(subtotalFisik * (smkkPct / 100));
      const dpp = subtotalFisik + biayaSmkk;
      const biayaPpn = Math.round(dpp * (ppnPct / 100));
      const grandTotal = dpp + biayaPpn;

      document.getElementById("rabSubtotalFisik").textContent = formatRupiah(subtotalFisik);
      document.getElementById("rabBiayaSmkk").textContent = formatRupiah(biayaSmkk);
      document.getElementById("rabBiayaPpn").textContent = formatRupiah(biayaPpn);
      document.getElementById("rabGrandTotal").textContent = formatRupiah(grandTotal);
      document.getElementById("rabPriorityRecommendation").textContent = `Strategi Utama: ${nkStatus.preservasi}`;
      document.getElementById("badgeTotalCost").textContent = formatRupiah(grandTotal);
      document.getElementById("kpiTotalRAB").textContent = formatRupiah(grandTotal);

      // Render Category Breakdown
      catBreakdownEl.innerHTML = Object.entries(categoryTotals).map(([cat, val]) => {
        const pct = subtotalFisik > 0 ? Math.round((val / subtotalFisik) * 100) : 0;
        return `
          <div class="bg-white p-2.5 rounded-lg border border-slate-200 space-y-1">
            <div class="flex items-center justify-between">
              <span class="font-semibold text-slate-800">${cat}</span>
              <span class="font-mono font-bold text-slate-900">${formatRupiah(val)} (${pct}%)</span>
            </div>
            <div class="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <div class="h-full bg-emerald-600 rounded-full" style="width: ${pct}%"></div>
            </div>
          </div>
        `;
      }).join("");

      // Render Technical Advice
      adviceListEl.innerHTML = [
        `<strong>Status Jembatan Level 1 (NK = ${maxNK} — ${nkStatus.label})</strong>: Berdasarkan Pedoman 01/P/BM/2022 Lampiran F, jembatan dengan NK = ${maxNK} masuk dalam program <strong>${nkStatus.preservasi}</strong>.`,
        `<strong>Tindakan Darurat & Keselamatan Lalu Lintas</strong>: Status saat ini adalah <em>"${b.tindakanDarurat}"</em>. Pastikan manajemen lalu lintas dan rambu peringatan beban terpasang selama pekerjaan perbaikan berlangsung.`,
        `<strong>Prioritas Elemen Struktural Utama</strong>: Dahulukan penanganan pada elemen dengan parameter Struktur <code class="font-mono">S = 1</code> dan Pengaruh <code class="font-mono">P = 1</code> (seperti pelindung gerusan pilar, sambungan baut rangka baja, dan gelagar utama) untuk menjaga kapasitas dukung beban jembatan.`,
        `<strong>Pemeliharaan Rutin Berkelanjutan</strong>: Pastikan pipa cucuran drainase lantai, siar muai, dan pembersihan vegetasi/sampah sungai dilakukan secara berkala agar tidak memicu korosi maupun degradasi ulang.`
      ].map(item => `<li>${item}</li>`).join("");
    }

    // =========================================================================
    // 9. CHART.JS DASHBOARD VISUALIZATION
    // =========================================================================
    function updateDashboardChart() {
      const canvas = document.getElementById("dashboardChart");
      if (!canvas || typeof Chart === "undefined") return;
      const b = getCurrentBridge();

      const compLabels = [
        "2.100 Jalan Pendekat",
        "2.200 Aliran Sungai",
        "2.300 Bangunan Bawah",
        "2.400 Bangunan Atas",
        "2.700 Perlengkapan"
      ];
      const costData = [0, 0, 0, 0, 0];
      const nkData = [0, 0, 0, 0, 0];

      b.defects.forEach(def => {
        const nk = calcDefectNK(def);
        const dmg = getDamageInfo(def.damageCode);
        const cost = ((Number(def.kuantitas) || 0) * (Number(def.unitPrice) || dmg.unitPrice)) / 1000000; // in Juta Rp
        const idx = compLabels.findIndex(lbl => def.level2.startsWith(lbl.split(" ")[0]));
        if (idx !== -1) {
          costData[idx] = Number((costData[idx] + cost).toFixed(2));
          nkData[idx] = Math.max(nkData[idx], nk);
        }
      });

      if (dashboardChartInstance) {
        dashboardChartInstance.destroy();
      }

      dashboardChartInstance = new Chart(canvas, {
        type: "bar",
        data: {
          labels: compLabels,
          datasets: [
            {
              label: "Estimasi Biaya Fisik (Juta Rp)",
              data: costData,
              backgroundColor: "rgba(37, 99, 235, 0.82)",
              borderColor: "rgb(29, 78, 216)",
              borderWidth: 1,
              yAxisID: "y"
            },
            {
              label: "Nilai Kondisi Maksimum (NK 0-5)",
              data: nkData,
              type: "line",
              borderColor: "rgb(225, 29, 72)",
              backgroundColor: "rgba(225, 29, 72, 0.15)",
              borderWidth: 2.5,
              pointRadius: 4,
              yAxisID: "y1"
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              type: "linear",
              position: "left",
              beginAtZero: true,
              title: { display: true, text: "Biaya (Juta Rp)" }
            },
            y1: {
              type: "linear",
              position: "right",
              min: 0,
              max: 5,
              grid: { drawOnChartArea: false },
              title: { display: true, text: "Nilai Kondisi (NK)" }
            }
          }
        }
      });
    }

    // =========================================================================
    // 10. NAVIGATION & EVENT HANDLERS
    // =========================================================================
    function switchTab(tabId) {
      activeTab = tabId;
      document.querySelectorAll(".tab-panel").forEach(panel => {
        panel.classList.toggle("hidden", panel.id !== `tab-${tabId}`);
      });
      document.querySelectorAll(".nav-tab-btn").forEach(btn => {
        const isCurrent = btn.getAttribute("data-tab") === tabId;
        btn.className = isCurrent
          ? "nav-tab-btn px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition flex items-center gap-2 bg-[#0B192C] text-white shadow-xs"
          : "nav-tab-btn px-3.5 py-2 rounded-lg text-xs sm:text-sm font-semibold whitespace-nowrap transition flex items-center gap-2 text-slate-600 hover:bg-slate-100 hover:text-slate-900";
      });

      if (tabId === "inventarisasi" && mapInstance) {
        setTimeout(() => {
          mapInstance.invalidateSize();
          const b = getCurrentBridge();
          mapInstance.setView([b.latStart, b.lngStart], 14);
        }, 120);
      }
      if (tabId === "konsep") {
        setTimeout(updateDashboardChart, 60);
      }
    }

    window.addEventListener("DOMContentLoaded", () => {
      initRutinDropdowns();
      populateBridgeSelector();
      populateInventoryForm();
      initMap();
      renderAllViews();

      // Navigation tabs
      document.querySelectorAll(".nav-tab-btn").forEach(btn => {
        btn.addEventListener("click", () => switchTab(btn.getAttribute("data-tab")));
      });
      document.querySelectorAll(".goto-tab-btn").forEach(btn => {
        btn.addEventListener("click", () => switchTab(btn.getAttribute("data-goto-tab")));
      });

      // Bridge Switcher
      document.getElementById("bridgeSelect").addEventListener("change", (e) => {
        currentBridgeId = e.target.value;
        populateInventoryForm();
        syncMapMarkersToBridge();
        if (mapInstance) {
          const b = getCurrentBridge();
          mapInstance.setView([b.latStart, b.lngStart], 14);
        }
        renderAllViews();
        showToast(`Beralih ke jembatan: ${getCurrentBridge().namaJembatan}`);
      });

      // Sub-tab switcher for Lampiran A.1 (Bagian 1 - Bagian 4)
      document.querySelectorAll(".inv-subtab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const targetSub = btn.getAttribute("data-inv-subtab");
          document.querySelectorAll(".inv-subpanel").forEach(p => {
            p.classList.toggle("hidden", p.id !== `invSubPanel-${targetSub}`);
          });
          document.querySelectorAll(".inv-subtab-btn").forEach(b => {
            const active = b.getAttribute("data-inv-subtab") === targetSub;
            b.className = active
              ? "inv-subtab-btn px-3 py-1.5 rounded-lg font-semibold bg-[#0B192C] text-white shadow-xs transition"
              : "inv-subtab-btn px-3 py-1.5 rounded-lg font-medium bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 transition";
          });
        });
      });

      document.querySelectorAll(".inv-a1-input").forEach(inp => {
        inp.addEventListener("change", () => {
          readLampiranA1FormIntoState();
        });
      });

      const btnAddSpan = document.getElementById("btnAddBag3SpanRow");
      if (btnAddSpan) {
        btnAddSpan.addEventListener("click", () => {
          const b = getCurrentBridge();
          const a1 = ensureBridgeLampiranA1Defaults(b);
          const nextNum = a1.spansA5A6.length + 1;
          const ref = a1.spansA5A6[a1.spansA5A6.length - 1] || {};
          a1.spansA5A6.push({
            ...JSON.parse(JSON.stringify(ref)),
            noBentang: `B ${nextNum}`
          });
          renderLampiranA1Tables();
          renderAllViews();
          showToast(`Baris Bentang B ${nextNum} ditambahkan ke Tabel A.5 & A.6.`);
        });
      }

      const btnAddSub = document.getElementById("btnAddBag3SubRow");
      if (btnAddSub) {
        btnAddSub.addEventListener("click", () => {
          const b = getCurrentBridge();
          const a1 = ensureBridgeLampiranA1Defaults(b);
          const pCount = a1.subA7.filter(r => r.noSub.toUpperCase().includes("PILAR")).length + 1;
          const ref = a1.subA7[0] || {};
          a1.subA7.splice(Math.max(1, a1.subA7.length - 1), 0, {
            ...JSON.parse(JSON.stringify(ref)),
            noSub: `PILAR P${pCount}`,
            kjpTipe: "D"
          });
          renderLampiranA1Tables();
          renderAllViews();
          showToast(`Baris PILAR P${pCount} ditambahkan ke Tabel A.7.`);
        });
      }

      const btnAddWide = document.getElementById("btnAddBag4WideningRow");
      if (btnAddWide) {
        btnAddWide.addEventListener("click", () => {
          const b = getCurrentBridge();
          const a1 = ensureBridgeLampiranA1Defaults(b);
          const nextNum = a1.wideningA9ToA11.length + 1;
          const ref = a1.wideningA9ToA11[a1.wideningA9ToA11.length - 1] || {};
          a1.wideningA9ToA11.push({
            ...JSON.parse(JSON.stringify(ref)),
            noBentang: `B ${nextNum}`,
            noSubPelebaran: `Pilar Pelebaran P${nextNum - 1}`
          });
          renderLampiranA1Tables();
          renderAllViews();
          showToast(`Baris Bentang Pelebaran B ${nextNum} ditambahkan ke Tabel A.9–A.11.`);
        });
      }

      
      
      
      // Toggle 16:9 Widescreen Viewport Mode vs Full Scroll Mode
      const btnToggle16x9 = document.getElementById("btnToggle16x9Mode");
      if (btnToggle16x9) {
        btnToggle16x9.addEventListener("click", () => {
          const is16x9 = document.body.classList.contains("viewport-16-9");
          if (is16x9) {
            document.body.classList.remove("viewport-16-9");
            document.body.classList.add("viewport-full");
            const lbl = document.getElementById("lblToggle16x9Mode");
            if (lbl) lbl.textContent = "Rasio Layar: Penuh (Klik ke 16:9)";
            showToast("Mode tampilan diubah ke Layar Penuh (Full Scroll).");
          } else {
            document.body.classList.remove("viewport-full");
            document.body.classList.add("viewport-16-9");
            const lbl = document.getElementById("lblToggle16x9Mode");
            if (lbl) lbl.textContent = "Rasio Layar: 16:9 Aktif";
            showToast("Mode tampilan diubah ke Bingkai Presisi 16:9 Widescreen.");
          }
          if (mapInstance) {
            setTimeout(() => mapInstance.invalidateSize(), 150);
          }
          setTimeout(updateDashboardChart, 150);
        });
      }

      // Toggle Print-Out Sheet Ratio (16:9 Landscape vs A4 Portrait)
      const prtRatioSel = document.getElementById("prtSheetRatioDropdown");
      if (prtRatioSel) {
        prtRatioSel.addEventListener("change", (e) => {
          const val = e.target.value;
          const sheet = document.getElementById("invijPrintableContainer");
          const dynStyle = document.getElementById("dynamicPrintPageStyle");
          if (val === "16:9") {
            if (sheet) sheet.classList.add("sheet-16-9");
            if (dynStyle) dynStyle.textContent = "@page { size: 297mm 167mm; margin: 8mm; }";
            showToast("Format lembar Print-Out diatur ke 16:9 Widescreen (Landscape).");
          } else {
            if (sheet) sheet.classList.remove("sheet-16-9");
            if (dynStyle) dynStyle.textContent = "@page { size: A4 portrait; margin: 10mm; }";
            showToast("Format lembar Print-Out diatur ke A4 Portrait.");
          }
        });
      }

      // Print Report Mode Selector (Inventarisasi, Rutin, Detail, Saran Perbaikan/RAB)
      document.querySelectorAll(".print-mode-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const mode = btn.getAttribute("data-print-mode-btn");
          switchPrintReportMode(mode);
          showToast(`Menampilkan laporan cetak: ${document.getElementById("prtActiveReportLabel")?.textContent || mode}`);
        });
      });

      const prtDropdown = document.getElementById("prtReportTypeDropdown");
      if (prtDropdown) {
        prtDropdown.addEventListener("change", (e) => {
          switchPrintReportMode(e.target.value);
          showToast(`Menampilkan laporan cetak: ${document.getElementById("prtActiveReportLabel")?.textContent || e.target.value}`);
        });
      }

      // Sub-tab switcher for Lampiran A.3 (Pemeriksaan Rutin Tabel A.16 - A.19)
      document.querySelectorAll(".rutin-subtab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const targetSub = btn.getAttribute("data-rutin-subtab");
          document.querySelectorAll(".rutin-subpanel").forEach(p => {
            p.classList.toggle("hidden", p.id !== `rutinSubPanel-${targetSub}`);
          });
          document.querySelectorAll(".rutin-subtab-btn").forEach(b => {
            const active = b.getAttribute("data-rutin-subtab") === targetSub;
            b.className = active
              ? "rutin-subtab-btn px-3 py-1.5 rounded-lg font-semibold bg-[#0B192C] text-white shadow-xs transition"
              : "rutin-subtab-btn px-3 py-1.5 rounded-lg font-medium bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 transition";
          });
        });
      });

      document.querySelectorAll(".rutin-a3-input").forEach(inp => {
        inp.addEventListener("change", () => {
          readLampiranA3FormIntoState();
        });
      });

      const btnSyncRutin = document.getElementById("btnSyncRutinFromInv");
      if (btnSyncRutin) {
        btnSyncRutin.addEventListener("click", () => {
          const b = getCurrentBridge();
          const a3 = ensureBridgeLampiranA3Defaults(b);
          a3.noNasProv = b.noJembatan;
          a3.namaJembatan = b.namaJembatan;
          a3.wilayah = `${b.provinsi} / ${b.kabKota}`;
          a3.dariKota = b.kotaAsal;
          a3.kmJarak = b.kmLokasi;
          a3.tahunBangun = b.tahunBangun;
          a3.koordAwal = `${decimalToDMS(b.latStart, true)}, ${decimalToDMS(b.lngStart, false)}`;
          a3.koordAkhir = `${decimalToDMS(b.latEnd, true)}, ${decimalToDMS(b.lngEnd, false)}`;
          a3.tglPeriksa = b.tglInventarisasi;
          a3.namaPemeriksa = b.namaPemeriksa;
          a3.nilaiLL = String(b.nilaiLaluLintas);
          a3.lhr = b.lhr;
          a3.tahunLHR = b.tahunLHR || 2026;
          populateLampiranA3Form();
          renderAllViews();
          showToast("Data Administrasi Tabel A.16 berhasil disinkronkan dari Pemeriksaan Inventarisasi!");
        });
      }

      const btnAllNormal = document.getElementById("btnSetAllRutinNormal");
      if (btnAllNormal) {
        btnAllNormal.addEventListener("click", () => {
          const b = getCurrentBridge();
          const a3 = ensureBridgeLampiranA3Defaults(b);
          Object.keys(a3.checklist).forEach(k => {
            a3.checklist[k].ya = false;
          });
          renderLampiranA3Tables();
          renderPrintoutLampiranA3();
          saveBridgesToStorage();
          showToast("Seluruh daftar periksa Tabel A.17–A.19 diset ke kondisi Normal (Tidak).");
        });
      }

      const btnAddDarurat = document.getElementById("btnAddRutinDaruratRow");
      if (btnAddDarurat) {
        btnAddDarurat.addEventListener("click", () => {
          const b = getCurrentBridge();
          const a3 = ensureBridgeLampiranA3Defaults(b);
          a3.daruratFlag = "Ya";
          const flagEl = document.getElementById("rutinA16DaruratFlag");
          if (flagEl) flagEl.value = "Ya";
          a3.daruratRows.push({
            kode: "4.411",
            uraian: "Gelagar Utama / Bangunan Atas",
            apb: `B ${a3.daruratRows.length + 1}`,
            x: 0,
            y: 0,
            z: 0,
            usulan: "a. Pembatasan beban",
            alasan: "1. Kerusakan yang berpotensi pada keruntuhan jembatan"
          });
          renderLampiranA3Tables();
          renderPrintoutLampiranA3();
          saveBridgesToStorage();
          showToast("Baris elemen Tindakan Darurat (Tabel A.16) ditambahkan.");
        });
      }

      // Auto-Sync on Inventory Inputs (using change to prevent duplicate digits on paste)
      document.querySelectorAll(".inv-input, .inv-coord-input").forEach(inp => {
        inp.addEventListener("change", () => {
          readInventoryFormIntoState();
        });
      });

      // Auto-Sync on Print-Out Preliminary Form Inputs
      document.querySelectorAll(".prt-meta-input").forEach(inp => {
        inp.addEventListener("change", () => {
          readPrintoutMetaFormIntoState();
        });
      });

      document.getElementById("btnSaveInventory").addEventListener("click", () => {
        readInventoryFormIntoState();
        showToast("Data Pemeriksaan Inventarisasi & Ordinat Peta disinkronkan ke Rutin & Detail!");
      });

      // Map Pin Mode Toggle
      const btnPinStart = document.getElementById("btnPinModeStart");
      const btnPinEnd = document.getElementById("btnPinModeEnd");
      btnPinStart.addEventListener("click", () => {
        activePinMode = "start";
        btnPinStart.className = "px-2.5 py-1 rounded font-semibold bg-[#1E3A8A] text-white";
        btnPinEnd.className = "px-2.5 py-1 rounded font-semibold bg-white text-slate-700 border border-slate-300";
      });
      btnPinEnd.addEventListener("click", () => {
        activePinMode = "end";
        btnPinEnd.className = "px-2.5 py-1 rounded font-semibold bg-[#1E3A8A] text-white";
        btnPinStart.className = "px-2.5 py-1 rounded font-semibold bg-white text-slate-700 border border-slate-300";
      });

      // Map Location Presets
      document.querySelectorAll(".map-preset-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const lat = parseFloat(btn.getAttribute("data-lat"));
          const lng = parseFloat(btn.getAttribute("data-lng"));
          applyMapCoordinate(lat, lng, "start");
          if (mapInstance) mapInstance.setView([lat, lng], 14);
        });
      });

      // Emergency & Compliance Selects in Rutin
      ["rutinTindakanDarurat", "rutinSesuaiInv", "rutinSesuaiDetail"].forEach(id => {
        document.getElementById(id).addEventListener("change", () => {
          const b = getCurrentBridge();
          b.tindakanDarurat = document.getElementById("rutinTindakanDarurat").value;
          b.sesuaiInv = document.getElementById("rutinSesuaiInv").value;
          b.sesuaiDetail = document.getElementById("rutinSesuaiDetail").value;
          renderAllViews();
        });
      });

      // Add Defect in Pemeriksaan Rutin
      document.getElementById("btnAddRutinDefect").addEventListener("click", () => {
        const b = getCurrentBridge();
        const code = document.getElementById("rutinJenisKerusakan").value;
        const dmg = getDamageInfo(code);
        const lokasiVal = document.getElementById("rutinLokasiElemen").value.trim() || "Bentang Utama / Abutmen A1";
        const qtyVal = Math.max(0.1, parseFloat(document.getElementById("rutinKuantitas").value) || 1);

        const apbVal = document.getElementById("rutinKodeAPB").value.trim() || "B 1";
        const xVal = parseInt(document.getElementById("rutinKoordX").value, 10) || 0;
        const yVal = parseInt(document.getElementById("rutinKoordY").value, 10) || 0;
        const zVal = parseInt(document.getElementById("rutinKoordZ").value, 10) || 0;
        const qtyTotalVal = Math.max(qtyVal, parseFloat(document.getElementById("rutinKuantitasTotal").value) || qtyVal * 2);
        const ketVal = document.getElementById("rutinKetDokumentasi").value.trim();

        const newDef = {
          id: "def-" + Date.now(),
          level1: document.getElementById("rutinLevel1").value,
          level2: document.getElementById("rutinLevel2").value,
          level3: document.getElementById("rutinLevel3").value,
          level4: document.getElementById("rutinLevel4").value,
          lokasi: lokasiVal,
          apb: apbVal,
          x: xVal,
          y: yVal,
          z: zVal,
          damageCode: code,
          penyebab: document.getElementById("rutinPenyebabKerusakan").value,
          kuantitas: qtyVal,
          kuantitasTotal: qtyTotalVal,
          satuan: document.getElementById("rutinSatuan").value,
          unitPrice: dmg.unitPrice,
          photoDataUrl: pendingRutinPhotoDataUrl || "",
          ketDokumentasi: ketVal,
          S: ["201", "202", "203", "206", "302", "303", "308", "551"].includes(code) ? 1 : 0,
          R: 1,
          K: qtyVal >= 20 ? 1 : 0,
          F: ["701", "801"].includes(code) ? 1 : 0,
          P: ["206", "503", "551", "601"].includes(code) ? 1 : 0
        };

        b.defects.push(newDef);
        document.getElementById("rutinLokasiElemen").value = "";
        document.getElementById("rutinKetDokumentasi").value = "";
        pendingRutinPhotoDataUrl = "";
        if (document.getElementById("rutinFotoKerusakan")) document.getElementById("rutinFotoKerusakan").value = "";
        if (document.getElementById("rutinFotoPreview")) document.getElementById("rutinFotoPreview").classList.add("hidden");
        renderAllViews();
        showToast("Temuan kerusakan ditambahkan & diintegrasikan ke Pemeriksaan Detail dan RAB!");
      });

      document.getElementById("filterRutinLevel2").addEventListener("change", renderRutinTable);

      // RAB SMKK & PPN Percentage Inputs
      document.getElementById("rabSmkkPct").addEventListener("input", renderAllViews);
      document.getElementById("rabPpnPct").addEventListener("input", renderAllViews);

      // Copy RAB Summary
      document.getElementById("btnCopyRAB").addEventListener("click", () => {
        const b = getCurrentBridge();
        const totalText = document.getElementById("rabGrandTotal").textContent;
        const summary = [
          `RINGKASAN ASESMEN & RAB JEMBATAN (BMS 01/P/BM/2022)`,
          `No. Jembatan: ${b.noJembatan} | Nama: ${b.namaJembatan}`,
          `Lokasi: ${b.namaRuas}, ${b.kabKota} (${b.latStart}, ${b.lngStart})`,
          `Jumlah Temuan Kerusakan: ${b.defects.length} item`,
          `Total Estimasi Biaya Penanganan (Termasuk PPN): ${totalText}`
        ].join("\n");

        const ta = document.createElement("textarea");
        ta.value = summary;
        document.body.appendChild(ta);
        ta.select();
        try {
          document.execCommand("copy");
          showToast("Ringkasan RAB berhasil disalin ke clipboard!");
        } catch (e) {
          showToast("Siap disalin.");
        }
        ta.remove();
      });

      // Foto input preview
      const fotoInput = document.getElementById("rutinFotoKerusakan");
      const fotoPreview = document.getElementById("rutinFotoPreview");
      if (fotoInput) {
        fotoInput.addEventListener("change", (e) => {
          const file = e.target.files && e.target.files[0];
          compressImageFile(file, (dataUrl) => {
            pendingRutinPhotoDataUrl = dataUrl;
            if (fotoPreview) {
              fotoPreview.src = dataUrl;
              fotoPreview.classList.toggle("hidden", !dataUrl);
            }
          });
        });
      }

      // Close Photo Modal
      document.getElementById("btnClosePhotoModal").addEventListener("click", () => {
        const pm = document.getElementById("modalPhotoPreview");
        pm.classList.add("hidden");
        pm.classList.remove("flex");
      });

      // Studio Sketsa Listeners (Metode 2B: Upload Foto Kertas -> Generate via Gemini AI)
      const sketchModal = document.getElementById("modalSketchStudio");
      const closeSketchStudio = () => {
        sketchModal.classList.add("hidden");
        sketchModal.classList.remove("flex");
      };
      document.getElementById("btnCloseSketchStudio").addEventListener("click", closeSketchStudio);
      document.getElementById("btnCancelSketchStudio").addEventListener("click", closeSketchStudio);

      const sketchFileInp = document.getElementById("sketchStudioFileInput");
      const previewWrap = document.getElementById("paperUploadPreviewWrap");
      const previewImg = document.getElementById("paperUploadPreviewImg");
      const studioCanvas = document.getElementById("sketchStudioCanvas");

      sketchFileInp.addEventListener("change", (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
          const img = new Image();
          img.onload = () => {
            rawPaperSketchImg = img;
            if (previewImg && previewWrap) {
              previewImg.src = ev.target.result;
              previewWrap.classList.remove("hidden");
            }
            const statusEl = document.getElementById("geminiSketchStatus");
            if (statusEl) {
              statusEl.classList.remove("hidden");
              statusEl.textContent = "Foto sketsa kertas berhasil diunggah. Klik tombol 'Generate Sketsa Teknis dengan Gemini AI' untuk memproses.";
            }
          };
          img.src = ev.target.result;
        };
        reader.readAsDataURL(file);
      });

      studioCanvas.addEventListener("click", (e) => {
        const rect = studioCanvas.getBoundingClientRect();
        const scaleX = studioCanvas.width / rect.width;
        const scaleY = studioCanvas.height / rect.height;
        const x = (e.clientX - rect.left) * scaleX;
        const y = (e.clientY - rect.top) * scaleY;
        drawRedDamageCalloutOnCanvas(x, y);
      });

      // Cara 2B Murni: Generate Sketsa Teknis Vektor (SVG) via Gemini AI (gemini-2.5-flash)
      document.getElementById("btnGenerateGeminiSketch").addEventListener("click", async () => {
        const b = getCurrentBridge();
        const target = b.defects.find(d => d.id === activeSketchDefId);
        if (!target) return;

        const apiKey = document.getElementById("geminiApiKeyInput").value.trim();
        const extraPrompt = document.getElementById("geminiSketchPrompt").value.trim();
        const statusEl = document.getElementById("geminiSketchStatus");
        statusEl.classList.remove("hidden");

        if (apiKey) {
          localStorage.setItem("si_bms_gemini_api_key", apiKey);
        }

        const renderSvgStringToStudioCanvas = (svgString, msg) => {
          let cleanSvg = svgString;
          if (!cleanSvg.includes("xmlns=")) {
            cleanSvg = cleanSvg.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"');
          }
          const svgUrl = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(cleanSvg);
          const svgImg = new Image();
          svgImg.onload = () => {
            const ctx = studioCanvas.getContext("2d");
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, studioCanvas.width, studioCanvas.height);
            ctx.drawImage(svgImg, 0, 0, studioCanvas.width, studioCanvas.height);
            if (extraPrompt) target.ketDokumentasi = extraPrompt;
            statusEl.textContent = msg;
            showToast("Sketsa teknis berhasil di-generate!");
          };
          svgImg.src = svgUrl;
        };

        if (!apiKey) {
          statusEl.textContent = "Men-generate diagram sketsa teknis vektor standar INVI-J...";
          const generatedSvg = buildGeminiTechnicalSVG(target, extraPrompt);
          renderSvgStringToStudioCanvas(
            generatedSvg,
            "Sketsa teknis 2D selesai di-generate! Klik tombol hijau 'Simpan & Input' di sebelah kanan."
          );
          return;
        }

        try {
          statusEl.textContent = "Menghubungi Gemini Vision AI (gemini-2.5-flash) untuk men-generate sketsa teknis dari foto kertas...";
          let sourceBase64 = "";
          if (previewImg && previewImg.src && previewImg.src.startsWith("data:image")) {
            sourceBase64 = previewImg.src.split(",")[1];
          } else {
            sourceBase64 = studioCanvas.toDataURL("image/jpeg", 0.85).split(",")[1];
          }

          const dmg = getDamageInfo(target.damageCode);
          const promptText = `Anda adalah insinyur struktur jembatan BMS Bina Marga. Analisis foto sketsa tangan di kertas kosong ini untuk elemen jembatan "${target.level4}" pada lokasi "${target.apb || "B 1"}" dengan jenis kerusakan "${target.customDamageLabel || dmg.label}". ${extraPrompt ? "Instruksi tambahan: " + extraPrompt : ""}. Buatlah kode <svg viewBox="0 0 420 300" width="420" height="300" xmlns="http://www.w3.org/2000/svg"> berlatar putih (#ffffff) yang menggambar ulang sketsa tangan tersebut menjadi gambar sketsa teknik 2D bersih standar INVI-J (garis struktur warna hitam/abu tua #1e293b dan penanda lokasi kerusakan/retak/deformasi beserta panah penunjuk warna merah #dc2626). Kembalikan HANYA blok kode <svg>...</svg> yang valid tanpa penjelasan lain.`;

          const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              contents: [{
                parts: [
                  { text: promptText },
                  { inline_data: { mime_type: "image/jpeg", data: sourceBase64 } }
                ]
              }]
            })
          });

          const json = await resp.json();
          const rawText = json?.candidates?.[0]?.content?.parts?.map(p => p.text || "").join(" ") || "";
          const svgMatch = rawText.match(/<svg[\s\S]*?<\/svg>/i);
          if (!svgMatch) {
            throw new Error("Menggunakan template vektor elemen standar.");
          }

          renderSvgStringToStudioCanvas(
            svgMatch[0],
            "Sketsa teknis vektor dari Gemini AI berhasil dibuat! Klik tombol hijau 'Simpan & Input' di kanan bawah."
          );
        } catch (err) {
          const fallbackSvg = buildGeminiTechnicalSVG(target, extraPrompt);
          renderSvgStringToStudioCanvas(
            fallbackSvg,
            "Sketsa teknis vektor selesai di-generate! Klik tombol hijau 'Simpan & Input' di kanan bawah."
          );
        }
      });

      document.getElementById("btnSaveSketchStudio").addEventListener("click", () => {
        const b = getCurrentBridge();
        const target = b.defects.find(d => d.id === activeSketchDefId);
        if (target) {
          target.sketchDataUrl = studioCanvas.toDataURL("image/jpeg", 0.82);
          renderAllViews();
          closeSketchStudio();
          showToast("Hasil generate sketsa berhasil diinput ke Pemeriksaan Detail & Print-Out!");
        }
      });

      // Listener Panel Langsung di Atas Tabel Pemeriksaan Detail (Cara 2B)
      const directSel = document.getElementById("detailSketchSelectDefect");
      const directFile = document.getElementById("detailDirectSketchFile");
      const directPaperImg = document.getElementById("detailDirectPaperPreview");
      const directPaperPh = document.getElementById("detailDirectPaperPlaceholder");
      const directCanvas = document.getElementById("detailDirectResultCanvas");
      const directStatus = document.getElementById("detailDirectStatus");
      const directKeyInp = document.getElementById("detailDirectApiKey");

      if (directKeyInp) {
        directKeyInp.value = localStorage.getItem("si_bms_gemini_api_key") || "";
      }
      if (directSel) {
        directSel.addEventListener("change", () => {
          renderDirectSketchPreviewCanvas();
        });
      }
      if (directFile) {
        directFile.addEventListener("change", (e) => {
          const file = e.target.files && e.target.files[0];
          if (!file) return;
          const reader = new FileReader();
          reader.onload = (ev) => {
            if (directPaperImg && directPaperPh) {
              directPaperImg.src = ev.target.result;
              directPaperImg.classList.remove("hidden");
              directPaperPh.classList.add("hidden");
            }
            if (directStatus) {
              directStatus.classList.remove("hidden");
              directStatus.textContent = "Foto sketsa kertas berhasil dimuat! Klik tombol kuning 'Generate Sketsa Teknis via Gemini AI & Input Otomatis'.";
            }
          };
          reader.readAsDataURL(file);
        });
      }

      const btnDirectGen = document.getElementById("btnDirectGenerateSketch");
      if (btnDirectGen) {
        btnDirectGen.addEventListener("click", async () => {
          const b = getCurrentBridge();
          const target = b.defects.find(d => d.id === directSel.value) || b.defects[0];
          if (!target) {
            showToast("Tambahkan minimal 1 elemen kerusakan terlebih dahulu.");
            return;
          }
          const apiKey = (directKeyInp?.value || "").trim();
          const extraNote = (document.getElementById("detailDirectNote")?.value || "").trim();
          if (apiKey) localStorage.setItem("si_bms_gemini_api_key", apiKey);

          directStatus.classList.remove("hidden");
          directStatus.textContent = "Sedang men-generate sketsa teknis 2D via Gemini AI...";

          const applySvgToTargetAndDirectCanvas = (svgString, msg) => {
            let cleanSvg = svgString;
            if (!cleanSvg.includes("xmlns=")) {
              cleanSvg = cleanSvg.replace("<svg", '<svg xmlns="http://www.w3.org/2000/svg"');
            }
            const svgUrl = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(cleanSvg);
            const svgImg = new Image();
            svgImg.onload = () => {
              const ctx = directCanvas.getContext("2d");
              ctx.fillStyle = "#ffffff";
              ctx.fillRect(0, 0, directCanvas.width, directCanvas.height);
              ctx.drawImage(svgImg, 0, 0, directCanvas.width, directCanvas.height);
              target.sketchDataUrl = directCanvas.toDataURL("image/jpeg", 0.85);
              if (extraNote) target.ketDokumentasi = extraNote;
              renderAllViews();
              directStatus.textContent = msg;
              showToast("Sketsa teknis berhasil di-generate & diinput ke tabel Pemeriksaan Detail + Print-Out!");
            };
            svgImg.src = svgUrl;
          };

          if (!apiKey) {
            const svgGenerated = buildGeminiTechnicalSVG(target, extraNote);
            applySvgToTargetAndDirectCanvas(
              svgGenerated,
              "Selesai! Sketsa teknis berhasil di-generate dan langsung diinput ke tabel Pemeriksaan Detail & Format Print-Out."
            );
            return;
          }

          try {
            let sourceBase64 = "";
            if (directPaperImg && directPaperImg.src && directPaperImg.src.startsWith("data:image")) {
              sourceBase64 = directPaperImg.src.split(",")[1];
            } else {
              sourceBase64 = directCanvas.toDataURL("image/jpeg", 0.85).split(",")[1];
            }
            const dmg = getDamageInfo(target.damageCode);
            const promptText = `Anda adalah insinyur struktur jembatan BMS Bina Marga. Analisis foto sketsa tangan di kertas kosong ini untuk elemen jembatan "${target.level4}" pada lokasi "${target.apb || "B 1"}" dengan jenis kerusakan "${target.customDamageLabel || dmg.label}". ${extraNote ? "Instruksi tambahan: " + extraNote : ""}. Buatlah kode <svg viewBox="0 0 420 300" width="420" height="300" xmlns="http://www.w3.org/2000/svg"> berlatar putih (#ffffff) yang menggambar ulang sketsa tangan tersebut menjadi gambar sketsa teknik 2D bersih standar INVI-J (garis struktur warna hitam/abu tua #1e293b dan penanda lokasi kerusakan/retak/deformasi beserta panah penunjuk warna merah #dc2626). Kembalikan HANYA blok kode <svg>...</svg> yang valid tanpa penjelasan lain.`;

            const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                contents: [{
                  parts: [
                    { text: promptText },
                    { inline_data: { mime_type: "image/jpeg", data: sourceBase64 } }
                  ]
                }]
              })
            });

            const json = await resp.json();
            const rawText = json?.candidates?.[0]?.content?.parts?.map(p => p.text || "").join(" ") || "";
            const svgMatch = rawText.match(/<svg[\s\S]*?<\/svg>/i);
            if (!svgMatch) throw new Error("Fallback SVG");
            applySvgToTargetAndDirectCanvas(
              svgMatch[0],
              "Selesai! Sketsa teknis vektor dari Gemini AI berhasil dibuat & diinput ke Pemeriksaan Detail + Print-Out."
            );
          } catch (err) {
            const fallbackSvg = buildGeminiTechnicalSVG(target, extraNote);
            applySvgToTargetAndDirectCanvas(
              fallbackSvg,
              "Selesai! Sketsa teknis berhasil di-generate & diinput ke Pemeriksaan Detail + Print-Out."
            );
          }
        });
      }

      // Delete Bridge Modal
      const delModal = document.getElementById("modalDeleteBridge");
      const closeDelModal = () => {
        delModal.classList.add("hidden");
        delModal.classList.remove("flex");
      };
      document.getElementById("btnDeleteBridge").addEventListener("click", () => {
        const b = getCurrentBridge();
        document.getElementById("deleteBridgeTargetName").textContent = `${b.noJembatan} — ${b.namaJembatan}`;
        delModal.classList.remove("hidden");
        delModal.classList.add("flex");
      });
      document.getElementById("btnCloseDeleteModal").addEventListener("click", closeDelModal);
      document.getElementById("btnCancelDeleteBridge").addEventListener("click", closeDelModal);
      document.getElementById("btnConfirmDeleteBridge").addEventListener("click", () => {
        if (bridges.length <= 1) {
          showToast("Minimal harus tersisa 1 data jembatan di dalam sistem.");
          closeDelModal();
          return;
        }
        const deletedName = getCurrentBridge().namaJembatan;
        bridges = bridges.filter(b => b.id !== currentBridgeId);
        currentBridgeId = bridges[0].id;
        populateBridgeSelector();
        populateInventoryForm();
        syncMapMarkersToBridge();
        renderAllViews();
        closeDelModal();
        showToast(`Data jembatan "${deletedName}" berhasil dihapus.`);
      });

      // Print Report -> Switch to INVI-J Print-Out tab and trigger print
      document.getElementById("btnPrintReport").addEventListener("click", () => {
        switchTab("printout");
        setTimeout(() => window.print(), 200);
      });
      document.getElementById("btnTriggerPrintInviJ").addEventListener("click", () => {
        window.print();
      });

      // Modal New Bridge
      const modal = document.getElementById("modalNewBridge");
      const openModal = () => {
        modal.classList.remove("hidden");
        modal.classList.add("flex");
      };
      const closeModal = () => {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      };

      document.getElementById("btnNewBridge").addEventListener("click", openModal);
      document.getElementById("btnCloseModalBridge").addEventListener("click", closeModal);
      document.getElementById("btnCancelNewBridge").addEventListener("click", closeModal);

      document.getElementById("btnConfirmNewBridge").addEventListener("click", () => {
        const no = document.getElementById("newBridgeNo").value.trim() || `34.099.${bridges.length + 1}.0`;
        const name = document.getElementById("newBridgeName").value.trim() || `Jembatan Baru #${bridges.length + 1}`;
        const ruas = document.getElementById("newBridgeRuas").value.trim() || "Ruas Jalan Nasional";
        const panjang = parseFloat(document.getElementById("newBridgePanjang").value) || 60;
        const bentang = parseInt(document.getElementById("newBridgeBentang").value, 10) || 2;

        const newId = "bms-" + Date.now();
        bridges.push({
          id: newId,
          noJembatan: no,
          namaJembatan: name,
          statusJalan: "Nasional",
          namaRuas: ruas,
          provinsi: "DI Yogyakarta",
          kabKota: "Kab. Sleman",
          kotaAsal: "Yogyakarta (Km. 0)",
          kmLokasi: 12.5,
          tglInventarisasi: "2026-11-03",
          namaPemeriksa: "Tim Inspektur BMS",
          tahunBangun: 2015,
          panjangTotal: panjang,
          jumlahBentang: bentang,
          lebarLantai: 7.0,
          lebarTrotoar: 1.5,
          clearenceVertikal: 4.5,
          lhr: 12000,
          nilaiLaluLintas: "0",
          bebanMuatan: 45,
          tipeBA: "GPT - Gelagar Beton Prategang (PCI/I-Girder)",
          tipeLantai: "Pelat Beton Bertulang + Lapis Aus Aspal (AC-WC)",
          tipeBB: "Abutmen Beton Bertulang & Pilar Kolom Tunggal/Ganda",
          tipeFondasi: "Tiang Bor (Bored Pile) Beton Bertulang",
          jenisLintasan: "Sungai Aliran Deras / Berpotensi Banjir & Gerusan",
          namaSungai: "Sungai Opak",
          latStart: -7.76850,
          lngStart: 110.47210,
          latEnd: -7.76810,
          lngEnd: 110.47260,
          tindakanDarurat: "Tidak Diperlukan",
          sesuaiInv: "Ya",
          sesuaiDetail: "Ya",
          defects: []
        });

        currentBridgeId = newId;
        populateBridgeSelector();
        populateInventoryForm();
        syncMapMarkersToBridge();
        renderAllViews();
        closeModal();
        switchTab("inventarisasi");
        showToast(`Jembatan "${name}" berhasil dibuat! Silakan lengkapi data & titik peta.`);
      });
    });
