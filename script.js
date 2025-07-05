document.addEventListener('DOMContentLoaded', function() {
    // Массив с данными фотографий
    const photos = [
        { src: 'img/pic1.png', title: 'dog' },
        { src: 'img/pic2.png', title: 'doog' },
        { src: 'img/pic3.png', title: 'dogs' },
        { src: 'img/pic4.png', title: 'dogy' },
        { src: 'img/pic5.png', title: 'doge' },
    ];

    const gallery = document.querySelector('.gallery');
    
    // Заполняем галерею фотографиями
    photos.forEach(photo => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = photo.src;
        img.alt = photo.title;
        img.className = 'gallery-image';
        
        const title = document.createElement('div');
        title.className = 'image-title';
        title.textContent = photo.title;
        
        galleryItem.appendChild(img);
        galleryItem.appendChild(title);
        gallery.appendChild(galleryItem);
        
        // Добавляем обработчик клика для открытия в модальном окне
        img.addEventListener('click', function() {
            openModal(photo.src, photo.title);
        });
    });
    
    // Функция открытия модального окна
    function openModal(src, title) {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImage');
        const caption = document.getElementById('caption');
        
        modal.style.display = "block";
        modalImg.src = src;
        caption.textContent = title;
        
        // Закрытие по клику на крестик
        const closeBtn = document.querySelector('.close');
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }
        
        // Закрытие по клику вне изображения
        modal.onclick = function(e) {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        }
    }
});
