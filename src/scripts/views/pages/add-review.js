/* eslint-disable linebreak-style */
/* eslint-disable indent */

const AddReview = {
    async render() {
        return `
            <div class="content-add-review m-auto">
                <div class="form-wrapper">
                    <div class="title-review">
                        <h1>Add Review</h1>
                    </div>
                    <div cLass="form-group">
                        <input type="text" class="input" id="name" placeholder="Input name.." autocomplete="off">
                    </div>
                    <div cLass="form-group">
                        <div class="label">
                            <label>Review</label>
                        </div>
                        <textarea class="input" id="review" rows="3" autocomplete="off"></textarea>
                    </div>
                    <div cLass="form-group review-btn">
                        <div class="line-button">
                            <button class="btn-review">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    },

    async afterRender() {
        // Fungsi ini akan dipanggil setelah render()
    },
};

export default AddReview;
