document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.how-working__step-button').forEach(function (howWorkingStepButton) {
        howWorkingStepButton.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path
            console.log(path)

            document.querySelectorAll('.how-working__step-button').forEach(function (howWorkingStepButton) {
                howWorkingStepButton.classList.remove('how-working__step-button--active')
            })
            document.querySelector(`[data-path="${path}"]`).classList.add('how-working__step-button--active')

            document.querySelectorAll('.how-working__content').forEach(function (howWorkingContent) {
                howWorkingContent.classList.remove('how-working__content--active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.add('how-working__content--active')
        })
    })
})
