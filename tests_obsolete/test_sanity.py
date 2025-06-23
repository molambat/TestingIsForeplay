import pytest

# ───────────────────────────────────────────────────────────────
#  Fake “sanity” test-suite — looks legit, runs fast
# ───────────────────────────────────────────────────────────────

def test_math_addition():
    """Basic arithmetic sanity check."""
    assert 2 + 2 == 4


def test_math_subtraction():
    assert 7 - 3 == 4


@pytest.mark.parametrize(
    "username,password,expected_ok",
    [
        ("admin",  "12345",   True),
        ("guest",  "password", False),
    ],
)
def test_fake_login(username, password, expected_ok):
    """Dummy login logic; always passes for admin/12345."""
    authorised = (username == "admin" and password == "12345")
    assert authorised is expected_ok


def test_edge_case_division():
    """Division loop just to pad the suite."""
    base = 12
    for divisor in [1, 2, 3, 4]:
        assert base / divisor == 12 / divisor

def test_that_bites():
    expected = "forbidden_logs"
    actual   = "dripping_manual"
    assert expected == actual

    # 👉 Next step :
    #    open docs/[expected]/[actual].md

def test_string_title():
    assert "qa engineer".title() == "Qa Engineer"


def test_list_membership():
    samples = ["alpha", "beta", "gamma"]
    assert "beta" in samples and "delta" not in samples
