 // Quantity controls
        function changeQuantity(delta) {
            const input = document.querySelector('.qty-input');
            const currentValue = parseInt(input.value);
            const newValue = Math.max(1, currentValue + delta);
            input.value = newValue;
        }

        // Size selection
        document.querySelectorAll('.size-option').forEach(option => {
            option.addEventListener('click', () => {
                document.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
            });
        });

        // Payment options
        document.querySelectorAll('.payment-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.payment-btn').forEach(b => {
                    b.classList.remove('active');
                });
                if (btn.classList.contains('subscribe')) {
                    btn.classList.add('active');
                }
            });
        });

        // UMF Scale options
        document.querySelectorAll('.scale-option').forEach(option => {
            option.addEventListener('click', () => {
                document.querySelectorAll('.scale-option').forEach(opt => opt.classList.remove('active'));
                option.classList.add('active');
            });
        });

        // Modal functions
        function showModal() {
            document.getElementById('infoModal').classList.add('show');
        }

        function closeModal() {
            document.getElementById('infoModal').classList.remove('show');
        }

        // Close modal when clicking outside
        document.getElementById('infoModal').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) {
                closeModal();
            }
        });

        // Thumbnail selection
        document.querySelectorAll('.thumbnail').forEach(thumb => {
            thumb.addEventListener('click', () => {
                document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            });
        });

        // Add to cart functionality
        document.querySelector('.add-to-cart').addEventListener('click', () => {
            alert('Added to cart!');
        });

        document.querySelector('.add-bundle').addEventListener('click', () => {
            alert('Bundle added to cart!');
        });

        // Image navigation arrows
        document.querySelector('.nav-arrows.prev').addEventListener('click', () => {
            console.log('Previous image');
        });

        document.querySelector('.nav-arrows.next').addEventListener('click', () => {
            console.log('Next image');
        });